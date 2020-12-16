const { fstat } = require('fs')
var http = require('http')
var urlPackage = require('url')
var fs = require('fs')

var server = http.createServer((req, res)=>{
    res.writeHead("200", {"Content-Type":"text/html; charset=utf-8"})
 if (req.url != '/favicon.ico') {
    console.log(req.url)
    console.log(urlPackage.parse(req.url, true).query)
    
    var queryParamObject = urlPackage.parse(req.url, true).query 
   
        var fn = queryParamObject.filename
        res.write("<h1> Working with filename in query param</h1>")
        res.write("<b>Filename: </b>" + fn)
        fs.readFile(fn, (err, data)=>{
            if(err)
                throw err

            console.log(data.toString())
            res.write("<br>")
            res.write(data.toString())
            res.end()
        })
   }
  
}).listen(1234, ()=>{
    console.log("Server listening on port 1234");
})

