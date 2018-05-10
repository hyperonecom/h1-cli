Param(
    [parameter(Mandatory=$true)]
    [ValidateNotNullOrEmpty()] 
    [string]$VM,

    [parameter(Mandatory=$true)]
    [ValidateNotNullOrEmpty()] 
    [string]$ReplicaServerName,

    [parameter(Mandatory=$true)]
    [ValidateNotNullOrEmpty()]
    [string]$CertificateBase64,

    [parameter(Mandatory=$true)]
    [ValidateNotNullOrEmpty()]
    [string]$CACertificatePath,

    [parameter(Mandatory=$true)]
    [ValidateNotNullOrEmpty()]
    [string]$Secret
)

$ErrorActionPreference = "Stop"

function jobWait($job) {
    do {
        $JobData = [wmi]$job
        Start-Sleep -s 1
    } while ( $JobData.JobState -eq 4 )

    return $jobData
}

if ($VM -match '^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$') {
    $VMobj = Get-VM -Id $VM
} else {
    $VMobj = Get-VM -Name $VM
}

if( $? ) {

    Write-Host "Disable Cert Revocation Check"
    New-ItemProperty `
        -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Virtualization\Replication" `
        -Name DisableCertRevocationCheck `
        -Value 1 `
        -Type DWORD `
        -Force `
        | Out-Null

    Write-Host "Importing CA"
    $certificate = Import-Certificate -FilePath $CACertificatePath -CertStoreLocation Cert:\LocalMachine\Root

    Write-Host "Importing Cert"

    $filePath = [System.IO.Path]::GetTempFileName() + '.pfx';
    [System.Convert]::FromBase64String($CertificateBase64) | Set-Content -Encoding Byte -Path $filePath

    $certificate = Import-PfxCertificate `
        -FilePath $filePath `
        -CertStoreLocation Cert:\LocalMachine\my `
        -Password (ConvertTo-SecureString -String $Secret -Force -AsPlainText)

    Remove-Item $filePath

    <#
    Set-VMReplicationServer `
        -ReplicationEnabled $true `
        -AllowedAuthenticationType Certificate `
        -ReplicationAllowedFromAnyServer $false `
        -CertificateThumbprint $certificate.Thumbprint
    #>

    Write-Host "Testing Connection"
    Test-VMReplicationConnection `
        -ReplicaServerName $ReplicaServerName `
        -ReplicaServerPort 443 `
        -AuthenticationType Certificate `
        -CertificateThumbprint $certificate.Thumbprint

    $VMID = $VMobj.Id

    $Msvm_ComputerSystem = Get-WmiObject -Namespace root\virtualization\v2 -Class Msvm_ComputerSystem -Filter "Name='$VMID'"
    $Msvm_ReplicationSettingData = $Msvm_ComputerSystem.GetRelated("Msvm_ReplicationSettingData") | % { $_ }

    $Msvm_ReplicationSettingData.RecoveryConnectionPoint = $ReplicaServerName
    $Msvm_ReplicationSettingData.AuthenticationType = 2 #1 - Kerberos, 2 - Certificate
    $Msvm_ReplicationSettingData.RecoveryServerPortNumber = 443
    $Msvm_ReplicationSettingData.CertificateThumbPrint = $certificate.Thumbprint
    $Msvm_ReplicationSettingData.CompressionEnabled = 1
    $Msvm_ReplicationSettingData.RecoveryHistory = 0
    $Msvm_ReplicationSettingData.ReplicationInterval = 300

    # 31 - SASDResourceTypeLogicalDisk
    $Msvm_VirtualSystemSettingData = $Msvm_ComputerSystem.GetRelated("Msvm_VirtualSystemSettingData")
    $Msvm_StorageAllocationSettingData = $Msvm_VirtualSystemSettingData.GetRelated("Msvm_StorageAllocationSettingData")
    $Msvm_ReplicationSettingData.IncludedDisks = $Msvm_StorageAllocationSettingData |
        ? { $_.ResourceType -eq 31 } |
        % { $_.__PATH }

    $Msvm_ReplicationService = Get-WmiObject -Namespace root\virtualization\v2 -Class Msvm_ReplicationService

    $ret = $Msvm_ReplicationService.CreateReplicationRelationship($Msvm_ComputerSystem, $Msvm_ReplicationSettingData.GetText(2))

    if ($ret.ReturnValue -eq 4096) {

        $JobData = jobWait($ret.job)

        if ($JobData.Status -ne "OK") {
            Write-Error $JobData
            return
        }
    }

    Write-Host "Replication successfully enabled"
}
