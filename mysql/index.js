var mysql = require('mysql')

console.log(mysql)

var connectionObject = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'classicmodels'
})

connectionObject.connect((err)=>{
    if(err)
        throw err
    console.log("Connected to MySQL server  and Database")

    var sql = "select * from customers"
    connectionObject.query(sql, (err, data)=>{
        if(err)
            throw err
        
            console.log(data)
            
    } )


})

