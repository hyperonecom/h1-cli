# h1-cli

[![Build Status](https://travis-ci.org/hyperonecom/h1-cli.svg?branch=master)](https://travis-ci.org/hyperonecom/h1-cli)

h1-cli jest konsolowym narzędziem przeznaczonym do zarządzania infrastrukturą chmury HyperOne. Możesz go wykorzystywać zarówno do własnych prac administracyjnych, jak również podczas tworzenia  skryptów automatyzujących.

## Przegląd funkcjonalności


* kontrola wszystkich zasobów udostępnianych przez panel administracyjny, w szczególności:

  * zmiana konfiguracji serwerów - ich tworzenie, wyłączanie i kasowanie,
  * manipulacja adresami IP - ich przepinanie, modyfikacja rekordu PTR,
  * modyfikowanie dysków - utworzenie, odłączenie / dołączenie od serwera, rozszerzenie, wykonanie migawki.

* różnorodne formy uwierzytelniania,
* wybór formatu wyjścia, w celu wykorzystania go w dodatkowych narzędziach.

[Referencyjna dokumentacja] zawiera komplet informacji na temat możliwych do wykonania akcji i ich opcji.

## Instalacja

Instalacja zasadniczo ogranicza się pobrania wykonywalnej kopii oprogramowania, która jest dostępna w zakładce [Releases] repozytorium.

### W środowisku systemu Linux

Uruchom dostarczony plik binarny po nadaniu uprawnień wykonywalnych:

```bash
$ chmod +x h1_client.bin
$ ./h1_client.bin
```

Aplikacja powinna działać poprawnie bez instalacji dodatkowych bibliotek / pakietów.

Jeżeli zamierzasz z oprogramowania stale korzystać możesz dokonać instalacja dla użytkownika lub na poziomie systemu.

Instalacja dla użytkownika może zostać przeprowadzona poprzez:

```bash
$ cp h1_client.bin ~/.local/bin/h1
$ h1
```

Instalacja na poziomie sytemu może zostać przeprowadzona poprzez:

```bash
$ cp h1_client.bin /usr/local/bin/h1
$ h1
```

### W środowisku systemu Windows

> Wprowadzenie dla systemu Windows wymaga opracowania z uwzględnieniem specyfiki platformy.

### W środowisku systemu macOS

> Wprowadzenie dla systemu macOS wymaga opracowania z uwzględnieniem specyfiki platformy.

## Użycie

Polecenia zbudowane są z następujących składowych:

```bash
$ h1 [kategoria] polecenie [[argument] ...]
```

Struktura ta powtarza się w wszystkich poleceniach aplikacji.

Aby rozpocząć prace powinieneś zalogować się poprzez polecenie:

```bash
$ h1 login --username {{adres_email}}
```

Zostaniesz poproszony o wprowadzenie hasła:

> ? Password: ********************

Po poprawnym logowaniu otrzymasz komunikat o uzyskaniu klucza API dla sesji:

> info: You successfully logged and stored your apiKey in config file

Dane uwierzytelniające zostały zapisane w ``$HOME/.h1-cli/conf.json``. Należy zapewnić poufność tych plików.

Jeżeli wykorzystujesz więcej niż 1 project musisz dokonać wyboru aktywnie używanego poprzez pobranie identyfikatora właściwego::

```bash
$ h1 project list
```

Następnie zatwierdzenia tego wyboru::

```bash
h1 project select --project {{project}}
```

### Utworzenie serwera

Poniżej przedstawiona jest przykładowa sesja przedstawiająca podstawową akcje - utworzenie serwera

```bash
$ h1 vm list
ID                        NAME           FLAVOUR    STATE    PROCESSING  TAGS
5b3f7c863adfaa0d10f7b445  docker-node    a1.small   Off      false       
5b3f8b7b3adfaa0d10f7bed4  docker-laas    a1.micro   Running  false       zabbix_agent
5b439f6b3adfaa0d10f90820  docker-node-2  m2.medium  Running  false       zabbix_agent,docker_registry

$ h1 user credentials list
ID                        NAME    TYPE  CREATED
5b30d80cddd5b3c5e9ee8dfe  my-ssh  ssh   2018-06-25T11:54:52.159Z

$ h1 vm create --name vm-tutorial --ssh my-ssh --image ubuntu:18.04 --type a1.micro --os-disk ssd,10
ID                        NAME         FLAVOUR   STATE    PROCESSING  TAGS
5b44b43511b0b1e6f24eb623  vm-tutorial  a1.micro  Running  false  

$ h1 vm list
ID                        NAME           FLAVOUR    STATE    PROCESSING  TAGS
5b44b43511b0b1e6f24eb623  vm-tutorial    a1.micro   Running  false       
```

Omówienie parametrów zasadniczego polecenia ``h1 vm create --name vm-tutorial --ssh my-ssh --image ubuntu:18.04 --type a1.micro --os-disk ssd,10``:

* ``--name vm-tutorial`` - własny identyfikator użytkownika dla serwera,
* ``--sshkey my-ssh`` - identyfikator klucza SSH możliwy do uzyskania poprzez ``h1 credentials list``,
* ``--image ubuntu:18.04`` - identyfikator obrazu systemu możliwy do uzyskania popzez ``h1 image list --recommended``,
* ``--type a1.micro`` - identyfikator typu instancji możliwy do uzyskania poprzez ``h1 service list --resource vm --type flavour``,
* ``--os-disk ssd,10`` - typ i rozmiar dysku systemowego.

Klucz SSH jest dostępny po wcześniejszym zaimportowaniu go np. poprzez polecenie ``h1 user credentials add --sshkey-file ~/.ssh/id_rsa.pub --name $(hostname)``.

### Zarządzanie serwerami

Poniżej przedstawiono podstawowe akcje możliwe do wykonania z serwerami w postaci przykładowych poleceń:

* ``h1 vm list`` - wypisuje istniejące serwery,
* ``h1 vm show --vm vm-tutorial`` - wypisuje szczegółowe informacje o serwerze ``vm-tutorial``,
* ``h1 vm stop --vm vm-tutorial`` - zatrzymuje serwery ``vm-tutorial`` bez jego usuwania,
* ``h1 vm start --vm vm-tutorial`` - uruchamia serwer ``vm-tutorial``,
* ``h1 vm turnoff --vm vm-tutorial`` - wyłącza serwer ``vm-tutorial`` bez jego usuwania,
* ``h1 vm destroy --vm vm-tutorial`` - kasuje serwer ``vm-tutorial``.

Możliwe jest także wprowadzanie zmian dotyczących dysków podłączonych do serwera:

* ``h1 vm disk attach --vm vm-tutorial --disk vm-disk-2`` - dołącza do instancji wcześniej utworzony dysk np. poprzez ``h1 disk create --name 'vm-disk-2' --type ssd --size 1``,
* ``h1 vm disk detach --vm vm-tutorial --disk vm-disk-2`` - odłącza od instancji dysk bez usuwania go.

Operacje te nie wymagają wyłączenia wirtualnych maszyn, w przypadku dysków innych niż systemowy.

### Zarządzanie dyskami

Dyski stanowią nośniki danych dla serwerów. Możliwe jest ich przełączanie i modyfikowanie w trakcie pracy maszyn wirtualnych.

Poniżej przedstawiono podstawowe akcje możliwe do wykonania z dyskami w postaci przykładowych poleceń:

* ``h1 disk list`` - wypisuje dostępne dyski
* ``h1 disk show --disk vm-disk-2`` - wypisuje parametry dysku ``vm-disk-2``, w tym identyfikator serwera,
* ``h1 disk delete --disk vm-disk-2`` - usuwa dysk ``vm-disk-2``,
* ``h1 disk rename --disk vm-disk-2 --new-name vm-disk-new`` - zmienia nazwę dysku ``vm-disk-2`` na ``vm-disk-new``,
* ``h1 disk create --name vm-disk-4 --type ssd --size 25`` - tworzy dysk SSD o rozmiarze 25 GB i nazwie ``vm-disk-4``,
* ``h1 disk resize --disk vm-disk-4 --size 30`` - rozszerza dysk ``vm-disk-4`` do rozmiaru 30 GB,

Rozszerzenie dysku nie jest możliwe w przypadku dysków systemowych maszyn uruchomionych. W przypadku dysku systemowego konieczne jest wcześniejsze wyłączenie serwera. W pozostałych przypadkach możliwe jest rozszerzenie dysku w trakcie pracy maszyny. Dla wykorzystania pełni potencjału zalecamy wykorzystanie LVM dla dysków niesystemowych.

### Zarządzanie obrazami

Możliwe jest utworzenie obrazków instancji, a także nimi zarządzenie. Obrazy pozwalają na utworzenie serwerów z identyczną konfiguracjąlub lub utworzenie tymczasowej kopii instancji np. dla zabezpieczenia stanu systemu przed znacznymi aktualizacjami.

Poniżej przedstawiono podstawowe akcje możliwe do wykonania z obrazami w postaci przykładowych poleceń:

* ``h1 image create --vm vm-tutorial --name vm-tutorial-$(date +"%Y-%m-%d")`` - tworzy obraz serwera i zapisuje go z podaną nazwą,
* ``h1 image list`` - wypisuje twoje obrazy,
* ``h1 image list --recommended`` - wypisuje nasze rekomendowane obrazy,
* ``h1 image delete --image vm-tutorial-2017-09-15`` - kasuje obraz ``vm-tutorial-2017-09-15``,
* ``h1 image show --image vm-tutorial-2017-09-15`` - wyświetla informacje o obrazie ``vm-tutorial-2017-09-15``,

### Zarządzanie innymi zasobami

Warto zwrócić uwagę na:

* ``h1 vm nic list --vm vm-id`` - wypisuje m. in. adresy IP wirtualnej maszyny.

W przypadku pozostałych zasobów warto korzystać z przełącznika ``h1 -h``, który w sposób pełny i najbardziej aktualny dokumentuje możliwości klienta.
 
W repozytorium dostępna jest [referencyjna dokumentacja] pozostałych komend.


### Zgłaszanie problemów i uwag

Jeśli napotkasz jakiekolwiek błędy z narzędziem, proszę zgłosić problem poprzez system zgłoszeń w panelu administracyjnym lub zakładkę [Issues] w repozytorium.

[Releases]: https://github.com/hyperonecom/h1-cli/releases/latest
[repozytorium]: https://github.com/hyperonecom/h1-cli
[Issues]: https://github.com/hyperonecom/h1-cli/issues
[referencyjna dokumentacja]: docs/index.md
