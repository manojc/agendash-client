const { google } = require("googleapis");

// authentication middleware
async function authenticateUser(req, res, next) {
    if (req.query && req.query.code && req.query.code.length) {
        req.session.user = req.query.code;
        return res.redirect("/dash");
    }
    res.redirect("/");
}

// authentication middleware
async function validateUser(req, res, next) {
    if (req.session && req.session.user && req.session.user.length) {
        return next();
    }
    res.redirect("/");
}

// generate google auth URL
function generateAuthUrl() {
    // get auth
    const auth = new google.auth.OAuth2({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        redirectUri: process.env.REDIRECT_URL
    });
    // generate login URL
    return auth.generateAuthUrl({
        hd: process.env.DOMAIN_RESITRCTION,
        access_type: 'offline',
        prompt: 'consent',
        scope: [
            'https://www.googleapis.com/auth/plus.me',
            'https://www.googleapis.com/auth/userinfo.email',
        ]
    });
}

module.exports = {
    authenticateUser: authenticateUser,
    generateAuthUrl: generateAuthUrl,
    validateUser: validateUser
};