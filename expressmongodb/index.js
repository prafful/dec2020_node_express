var express  = require('express')
var mongoose = require('mongoose')
var model = require('./model/personal')

var app = express()
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/friends")

var db = mongoose.connection

console.log(db.collections)

db.on('error', ()=>{
    console.log("Error connecting to database!");
})


db.on('open', ()=>{
    console.log("Connected to database!");
})

app.get("/all", (req, res)=>{
    model.find({}, (err, data)=>{
        if(err){
            res.send(err)
        }
        console.log(data)
        res.send(data)
    } )
})

app.get("/all/:name", (req, res)=>{
    var pathParameter = req.params.name
    model.find({name: pathParameter}, (err, data)=>{
        if(err){
            res.send(err)
        }
        console.log(data)
        res.send(data)
    } )
})


app.post("/add", (req, res)=>{
    console.log(req.body)
    var newFriend = new model()
    newFriend.name = req.body.name
    newFriend.location = req.body.location
    newFriend.years = req.body.years

    newFriend.save((err)=>{
        if(err){
            res.send(err)
        }
        res.send({
            status: true,
            message: "Add Friend Success!!!!"
        })
    })

  
})

app.listen("1234", ()=>{
    console.log("Server is listening on port 1234")
})