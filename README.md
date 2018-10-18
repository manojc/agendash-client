# agendash-client

## What is this?

Agendash client is a small POC to connect Agendash UI with an Express middleware.

The POC also uses a authentication routing middleware to secure the agendash router app.

Install dependencies with `npm install` command

Make sure you are connected to mongo db.

Run the app with `npm start` command

---

## Environment Keys

``` bash
# mongo database url
AGENDADH_CLIENT_DB_URL=mongodb://localhost/agendaDb

# application port
AGENDADH_CLIENT_PORT=3000

# agendash dashboard title
AGENDADH_CLIENT_TITLE=Agenda

# Google auth credentials (for more info - https://auth0.com/docs/connections/social/google)
AGENDADH_CLIENT_GOOGLE_CLIENT_ID=AGENDADH_CLIENT_GOOGLE_CLIENT_ID
AGENDADH_CLIENT_GOOGLE_CLIENT_SECRET=AGENDADH_CLIENT_GOOGLE_CLIENT_SECRET

# google callback URL will be `${AGENDADH_CLIENT_REDIRECT_URL}${AGENDADH_CLIENT_REDIRECT_ROUTE}`
# callback URL from google auth
AGENDADH_CLIENT_REDIRECT_URL=http://localhost:3000
# callback URL route from google auth
AGENDADH_CLIENT_REDIRECT_ROUTE=/authenticate

AGENDADH_CLIENT_DASHBOARD_ROUTE=/dashboard
AGENDADH_CLIENT_LOGIN_ROUTE=/login

# google email domain restrictions
AGENDADH_CLIENT_DOMAIN_RESITRCTION=gmail.com

# session secret for encryption
AGENDADH_CLIENT_SESSION_SECRET=AGENDADH_CLIENT_SESSION_SECRET

# session expiry in milliseconds
AGENDADH_CLIENT_SESSION_EXPIRY_MILLISECONDS=28800000

# static file directory path relative to root directory
AGENDADH_CLIENT_STATIC_FILE_DIRECTORY=public

```

> Replace default values with appropriate values.


---

## Author

Manoj Chalode (chalodem@gmail.com)

Copyrights - Manoj Chalode (October  2018)