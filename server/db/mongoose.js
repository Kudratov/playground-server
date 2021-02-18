/*jshint esversion: 6 */
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://kudratov:password123456789@cluster0.l81b5.mongodb.net/TraingDatabase?retryWrites=true&w=majority',{useNewUrlParser: true});

module.exports = {
    mongoose
};