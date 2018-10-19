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
const url = process.env.AGENDASH_CLIENT_DB_URL || "mongodb://localhost/agendaDb";
const port = process.env.AGENDASH_CLIENT_PORT || 3000;
const sessionConfig = {
    secret: process.env.AGENDASH_CLIENT_SESSION_SECRET, 
    cookie: { 
        maxAge: parseInt(process.env.AGENDASH_CLIENT_SESSION_EXPIRY_MILLISECONDS)
    },
    saveUninitialized: true,
    resave: true
};

/**
 * Builds App For Agendash Client
 * Connects to database
 * Initialises roots
 * Initialises session
 * Triggers Agenda & Agendash
 * @returns Express App
 * @throws Error
 */
async function buildApp() {
    try {
        // connect to database
        await Mongoose.connect(url, { useNewUrlParser: true });
        // create agenda instance
        const agenda = await new Agenda({ mongo: Mongoose.connection });
        // start agenda
        await agenda.start();
        // session
        app.use(session(sessionConfig))
        // static files
        app.use(express.static(process.env.AGENDASH_CLIENT_STATIC_FILE_DIRECTORY));
        // routes
        registerRoutes(app, agenda);
        return app;
    } catch (error) {
        console.log(error.stack);
        throw error;
    }    
}

module.exports = buildApp();