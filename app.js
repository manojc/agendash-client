const express = require("express");
const Mongoose = require("mongoose");
const Agenda = require('agenda');
const Dotenv = require("dotenv");
const session = require("express-session");

const registerRoutes = require("./routes");

// load environment keys
Dotenv.config();

// override default mongoose Promise
Mongoose.Promise = global.Promise;

// initialise express app
const app = express();

// app constants
const url = process.env.DB_URL || "mongodb://localhost/agendaDb";
const port = process.env.PORT || 3000;
const sessionConfig = {
    secret: process.env.SESSION_SECRET, 
    cookie: { 
        maxAge: parseInt(process.env.SESSION_EXPIRY_MILLISECONDS)
    },
    saveUninitialized: true,
    resave: true
};

// IIFE
(async () => {
    try {
        // connect to database
        await Mongoose.connect(url, { useNewUrlParser: true });
        // create agenda instance
        const agenda = await new Agenda({ mongo: Mongoose.connection });
        // start agenda
        await agenda.start();
        // session
        app.use(session(sessionConfig))
        // routes
        registerRoutes(app, agenda);
        // start the app
        app.listen(port, () => console.log("server started"));
    } catch (error) {
        console.log(error.stack);
    }
})();

module.exports = app;