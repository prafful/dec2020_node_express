var myrouter = require('express').Router()

var {
    getAllFriendsController,
    getFriendByIdController
} = require('./friends.controller')


myrouter.get('/', getAllFriendsController)
myrouter.get('/:id', getFriendByIdController)

module.exports = myrouter