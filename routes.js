const Agendash = require("agendash");
const { authenticateUser, generateAuthUrl, validateUser } = require("./auth");

module.exports = function registerRoutes(app, agenda) {

    // agenda route
    app.use('/dash', validateUser, Agendash(agenda, { title: process.env.TITLE || "Agenda" }));

    // redirect to google login link
    app.use('/login', (req, res, next) => {
        res.redirect(generateAuthUrl());
    });

    // redirect to google login link
    app.use('/authenticate', authenticateUser);

    app.use("/index.css", (req, res, next) => {
        res.sendFile(`${__dirname}/public/index.css`)
    });

    app.use("**", (req, res, next) => {
        res.sendFile(`${__dirname}/public/index.html`)
    });
}