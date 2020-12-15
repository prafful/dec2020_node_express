var http = require('http')
var urlPackage = require('url')

var server = http.createServer((req, res)=>{
    res.writeHead("200", {"Content-Type":"text/html"})
    console.log(req.url)
    console.log(urlPackage.parse(req.url, true).query)
    var queryParamObject = urlPackage.parse(req.url, true).query 

    res.write("<h1> Working with Query Param</h1>")
    res.write("<b>Name: </b>" + queryParamObject.name)
    res.write("<br>")
    res.write("<b>Location: </b>" + queryParamObject.location)
    res.end()
}).listen(1234, ()=>{
    console.log("Server listening on port 1234");
})

