# agendash-client

[![npm version][npm-image]][npm-url]
[![node][node-version-image]][node-version-url]
[![License][license-image]][license-url]
[![npm][downloads-image]][downloads-url]
[![Hackage-Deps][dependency-image]][dependency-url]
[![David][dev-dependency-image]][dev-dependency-url]

[npm-url]: https://www.npmjs.com/package/agendash-client
[npm-image]: https://img.shields.io/npm/v/agendash-client.svg

[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/make-coverage-badge.svg

[downloads-url]: https://www.npmjs.com/package/agendash-client
[downloads-image]: https://img.shields.io/npm/dm/agendash-client.svg

[node-version-url]: https://github.com/manojc/agendash-client
[node-version-image]: https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square

[dependency-url]: https://www.npmjs.com/package/agendash-client
[dependency-image]: https://img.shields.io/hackage-deps/v/lens.svg

[dev-dependency-url]: https://www.npmjs.com/package/agendash-client
[dev-dependency-image]: https://img.shields.io/david/dev/manojc/agendash-client.svg

## What is this?

`agendash-client` is a node package to connect Agendash UI with an Express middleware.

this package uses google OAuth2 authentication routing middleware to secure the agendash app route.

Install dependencies with `npm install` command

Make sure you are connected to mongo db.

Run the app with `npm start` command.

The demo app runs on http://localhost:3000 by default.

---

## Environment Keys

``` bash
# mongo database url
AGENDASH_CLIENT_DB_URL=mongodb://localhost/agendaDb

# application port
AGENDASH_CLIENT_PORT=3000

# agendash dashboard title
AGENDASH_CLIENT_TITLE=Agenda

# Google auth credentials (for more info - https://auth0.com/docs/connections/social/google)
AGENDASH_CLIENT_GOOGLE_CLIENT_ID=AGENDASH_CLIENT_GOOGLE_CLIENT_ID
AGENDASH_CLIENT_GOOGLE_CLIENT_SECRET=AGENDASH_CLIENT_GOOGLE_CLIENT_SECRET

# google callback URL will be `${AGENDASH_CLIENT_REDIRECT_URL}${AGENDASH_CLIENT_REDIRECT_ROUTE}`
# callback URL from google auth
AGENDASH_CLIENT_REDIRECT_URL=http://localhost:3000
# callback URL route from google auth
AGENDASH_CLIENT_REDIRECT_ROUTE=/authenticate

AGENDASH_CLIENT_DASHBOARD_ROUTE=/dashboard
AGENDASH_CLIENT_LOGIN_ROUTE=/login

# google email domain restrictions
AGENDASH_CLIENT_DOMAIN_RESITRCTION=gmail.com

# session secret for encryption
AGENDASH_CLIENT_SESSION_SECRET=AGENDASH_CLIENT_SESSION_SECRET

# session expiry in milliseconds
AGENDASH_CLIENT_SESSION_EXPIRY_MILLISECONDS=28800000

# static file directory path relative to root directory
AGENDASH_CLIENT_STATIC_FILE_DIRECTORY=public

```

> Replace default values with appropriate values.


---

## Author

Manoj Chalode (chalodem@gmail.com)

Copyrights - Manoj Chalode (October  2018)
