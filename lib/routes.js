const Agendash = require("agendash");
const { authenticateUser, generateAuthUrl, validateUser } = require("./auth");

module.exports = function registerRoutes(app, agenda) {

    // agenda route
    app.use(process.env.AGENDASH_CLIENT_DASHBOARD_ROUTE, validateUser, Agendash(agenda, { title: process.env.AGENDASH_CLIENT_TITLE || "Agenda" }));

    // redirect to google login link
    app.use(process.env.AGENDASH_CLIENT_LOGIN_ROUTE, (req, res, next) => {
        !!process.env.AGENDASH_CLIENT_DISABLE_AUTH ?
            res.redirect(process.env.AGENDASH_CLIENT_DASHBOARD_ROUTE) :
            res.redirect(generateAuthUrl());
    });

    // redirect to google login link
    app.use(process.env.AGENDASH_CLIENT_REDIRECT_ROUTE, authenticateUser);

    // server static files
    app.use("**", (req, res, next) => {
        res.send("404 - Page Not Found!");
    });
}