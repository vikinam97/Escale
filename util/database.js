'use strict';

module.exports = function (config) {
    const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    // Connect to database
    mongoose.connect(config.mongo.uri, config.mongo.options,function() {
        if (config.seedDB) {
            mongoose.connection.db.dropDatabase()
        }
    });
    mongoose.connection.on('error', function (err) {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
    });
}