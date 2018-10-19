const buildApp = require("../lib/app");

buildApp
    .then((app) => {
        app.listen(process.env.AGENDASH_CLIENT_PORT, () => {
            console.log(`Agendash Client Started On http://localhost:${process.env.AGENDASH_CLIENT_PORT}`)
        });
    })
    .catch((error) => console.log(error.stack));