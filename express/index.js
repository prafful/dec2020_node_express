var express = require('express')
var mysql = require('mysql')

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

friends = [
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

app.get("/friends", (req, res)=>{
    res.send(friends)
})

app.post("/friends", (req, res)=>{
    console.log(req.body)
    if(req.body != undefined){
         friends.push(req.body)
    }
    res.send(friends)
})

app.get("/customers", (req, res)=>{
    connectionObject.connect((err)=>{
        if(err)
            throw err
        console.log("Connected to MySQL server  and Database")
    
        var sql = "select * from friends"
        connectionObject.query(sql, (err, data)=>{
            if(err)
                throw err
            
            res.send(data)
                
        } )
    
    
    })
    
})

app.post('/customers', (req, res)=>{
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






app.listen(1234, ()=>{
    console.log("listening on port 1234")
})