var express = require('express')
var jwt = require('jsonwebtoken')

var authorization = require('./authorize')

var app = express()
app.use(express.json())

app.get('/token', (req, res)=>{
    let user = {
        name:"obb",
        scope: ["create", "read"]
    }

    let token = jwt.sign(user, "somesecretkey")
    res.send(token)
})

app.get('/friends', authorization("pcreate"), (req, res)=>{
   

     res.send({
         data: "All users..."
     })
})



app.listen(1234, ()=>{
    console.log("Listening on port 1234")
})
