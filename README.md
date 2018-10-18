# agendash-client

## What is this?

Agendash client is a small POC to connect Agendash UI with an Express middleware.

The POC also uses a authentication routing middleware to secure the agendash router app.

Install dependencies with `npm install` command

Make sure you are connected to mongo db.

Run the app with `npm start` command

---

## Environment Keys

- DB_URL = (default - mongodb://localhost/agendaDb)

- PORT = (default - 3000)

- TITLE = (default - Agenda)

- GOOGLE_CLIENT_ID = (default - GOOGLE_CLIENT_ID)

- GOOGLE_CLIENT_SECRET = (default - GOOGLE_CLIENT_SECRET)

- REDIRECT_URL = (default - https://your-website.com/google-auth)

- DOMAIN_RESITRCTION = (default - gmail.com)

- SESSION_SECRET = (default - SESSION_SECRET)

- SESSION_EXPIRY_MILLISECONDS = (default - 28800000)

> Replace default values with appropriate values.


---

## Author

Manoj Chalode (chalodem@gmail.com)

Copyrights - Manoj Chalode (October  2018)