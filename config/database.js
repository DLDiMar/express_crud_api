const mongoose = require('mongoose');

// Get MongoDB URL from properties file
const dbURL = require('./properties').DB;


// Highlight different for each scenario using chalk

// Database exported to server.js
module.exports = () => {


    mongoose.connect(dbURL);
    
    mongoose.connection.on('connected', () => {
        console.log("Mongoose default connection is open to ", dbURL);
    });

    mongoose.connection.on('err', () => {
        console.log("Mongoose default connection has produced " + err + "error.");
    });

    mongoose.connection.on('disconnected', () => {
        console.log("Mongoose default connection is disconnected.");
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log("Application terminated, Mongoose default connection is disconnected");
        });
    });
}