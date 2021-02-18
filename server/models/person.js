/*jshint esversion: 6 */
var mongoose = require('mongoose');

var Person = mongoose.model('Person', {
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    location: {
        type: String,
        default: null
    },
    age: {
        type: Number,
        default: null
    },
    gender: {
        type: String,
        require: true
    },
    hobby: {
        type: String,
        required: true
    }
});

module.exports = {
    Person
};