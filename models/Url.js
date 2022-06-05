const mongoose = require('mongoose')

const Url = new mongoose.Schema({
    expireAt: { type: Date,  expires: 604800 }, //Will be deleted after 1 week
    origurl : {type : String, required : true},
    shortcode : {type : String},
    shorturl : {type : String}
})

module.exports = mongoose.model('Url', Url)