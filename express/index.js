var express = require('express')
var mysql = require('mysql')
var cors = require('cors')
var { body, validationResult } = require('express-validator');

console.log(mysql)

var connectionObject = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'nov01friend'
})

var app  = express()
app.use(express.json())
app.use(cors())

friendslocal = [
    {
        id:1,
        name:"obb",
        location: "chennai"
    },
    {
        id:2,
        name:"cas",
        location: "bengaluru"
    }
]


app.get("/", (req, res)=>{
    res.send("Welcome to express app!!!!")
})

app.get("/friendslocal", (req, res)=>{
    res.send(friends)
})

app.post("/friendslocal", (req, res)=>{
    console.log(req.body)
    if(req.body != undefined){
         friends.push(req.body)
    }
    res.send(friends)
})

connectionObject.connect((err)=>{
    if(err)
        throw err
    console.log("Connected to MySQL server  and Database")

}) 

app.get("/friends", (req, res)=>{
   
    
        var sql = "select * from friends"
        connectionObject.query(sql, (err, data)=>{
            if(err)
                throw err
            
            res.send(data)
                
        })
    })

app.get("/friends/:id", (req, res)=>{
   
    
        var sql = "select * from friends where id=" + req.params.id
        console.log(sql)
        connectionObject.query(sql, (err, data)=>{
            if(err)
                throw err
            
            res.send(data)
                
        })
    })

app.post('/friends',[
                        body('name').not().isEmpty().withMessage("name must not be empty"), 
                        body('location').not().isEmpty().withMessage("location must not be empty")
                    ], 
          (req, res)=>{
                        var error = validationResult(req)
                        if (!error.isEmpty()) {
                            return res.status(400).json({ errors: error.array() });
                          }
                        
                        console.log(req.body)
                        var sql = `insert into friends 
                                    (
                                    name, location
                                    )
                                    values
                                    (
                                        ?,?
                                    );
                                `
                        connectionObject.query(sql, [ req.body.name,  req.body.location], (err, data)=>{
                            if(err)
                                throw err
                            
                            console.log(data)
                            var sql = "select * from friends"
                            connectionObject.query(sql, (err, data)=>{
                                if(err)
                                    throw err
                                
                                res.send(data)
                                    
                            })
    
    })          

    
})

app.put("/friends/:id", (req, res)=>{
    console.log(req.body)
    //res.send("udpating friend with id: " + req.params.id)
    var sql = "update friends set name = ' " + req.body.name + "',"+
            "location = '" + req.body.location + "'" +
            "where id = " + req.params.id
    console.log(sql)
    connectionObject.query(sql, (err, data)=>{
        if(err)
            throw err
        console.log("Updated friend with id: " + req.params.id)
        res.send(data)
    })        
})

app.delete("/friends/:id", (req, res)=>{
    var sql = "delete from friends where id = " + req.params.id
    connectionObject.query(sql, (err, data)=>{
        if(err)
            throw err
        
        res.send(data)
            
    })
})


app.listen(1234, ()=>{
    console.log("listening on port 1234")
})