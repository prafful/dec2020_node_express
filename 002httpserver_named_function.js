var http = require('http')

//var server = http.createServer(callBack Named function)
//var server = http.createServer(callBack Ghost/Anonymous function)
//var server = http.createServer(callBack Arrow function)

var server = http.createServer(myServer)

function myServer(request, response){
    response.writeHead("200", {"Content-Type":"text/html"})
    response.write("<h1> Hello from Node Server ver 1.0</h1>")
    response.end()
}

server.listen(1234, runOnPort )

function runOnPort(){
    console.log("Server is running on port 1234")
}



