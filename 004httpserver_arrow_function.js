var http = require('http')

//var server = http.createServer(callBack Named function)
//var server = http.createServer(callBack Ghost/Anonymous function)
//var server = http.createServer(callBack Arrow function)

var server = http.createServer((request, response)=>{
    response.writeHead("200", {"Content-Type":"text/html"})
    response.write("<h1> Hello from Node Server ver 4.0</h1><h3>Run again with nodemon!!!!</h3>")
    response.end()
})



server.listen(1234, ()=>{
        console.log("Server is running on port 1234")
    })


