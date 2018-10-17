const express = require("express");
const Mongoose = require("mongoose");
const Agenda = require('agenda');
const Agendash = require("agendash");

Mongoose.Promise = global.Promise;

// initialise express app
const app = express();

// app constants
const url = process.env.DB_URL || "mongodb://localhost/agendaDb";
const port = process.env.PORT || 3000;
const title = process.env.TITLE || "Agenda";

// authentication middleware
function auth(req, res, next) {
    next();
}

// IIFE
(async () => {
    try {
        // connect to database
        await Mongoose.connect(url, { useNewUrlParser: true });
        // create agenda instance
        const agenda = await new Agenda({ mongo: Mongoose.connection });
        // start agenda
        await agenda.start();
        // attach auth & agenda middleware to the router
        app.use('/dash', auth, Agendash(agenda, { title: title }));
        // start the app
        app.listen(port, () => console.log("server started"));
    } catch (error) {
        console.log(error.stack);
    }
})();

module.exports = app;