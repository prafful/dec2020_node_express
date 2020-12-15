var fs = require('fs')

fs.readFile("Readme.md",  (err, data)=>{
    if(err){
        throw err
    }
    console.log(data)
    console.log(data.toString())
})