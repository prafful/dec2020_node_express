require('dotenv').config()
var express = require('express')
var allRoutes = require('./api/friends.routes')

var app = express()
app.use(express.json())

//configure the routes
app.use('/api/friends', allRoutes)


app.listen(process.env.APP_PORT, ()=>{
    console.log("Server is listening on port: " + process.env.APP_PORT);
})

