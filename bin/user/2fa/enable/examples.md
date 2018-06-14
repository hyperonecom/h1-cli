# Enable Time-Based One-Time Password (TOTP) factor

```bash
h1 user 2fa enable
```

After scanning image in [Google Authenticator] or [Authy] applications, you will receive a 
token that will allow you to login to the site.

[Google Authenticator]: https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2
[Authy]: https://authy.com/download/

# Enable One-time authorization Codes (OTAC) factor

```bash
h1 user 2fa enable --type otac
```