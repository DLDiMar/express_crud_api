const express = require('express');
//const log = require('dev');
const bodyParser = require('body-parser');

const properties = require('./config/properties');
const db = require('./config/database');
const tvShowRoutes = require('./tvshows/tvshows.routes');

const app = express();

// Configure body parser for JSON and convert chars into internet protocol
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

// Intialize express router
const router = express.Router();

// Call database connectivity function
db();

// Configure app.use()
//app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Error Handling via app.use()
app.use( (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT");
    res.setHeader("Access-Control-Allow-Headers", 
        "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});

// Use Express router for API
app.use('/api', router);
tvShowRoutes(router);

app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on port ${properties.PORT}.`);
})