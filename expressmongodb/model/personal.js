var mongoose = require('mongoose')

var mongoSchema = mongoose.Schema

var friendsSchema = new mongoSchema({
                    "name": String, 
                    "years": Number,
                    "location":String
                }, {
                    collection:'personal'
                })

module.exports = mongoose.model('friends', friendsSchema )                