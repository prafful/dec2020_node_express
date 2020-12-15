var fs = require('fs')

sourcefile = process.argv[2]
targetfile = process.argv[3]

fs.readFile(sourcefile,  (err, data)=>{
    if(err){
        throw err
    }
    console.log(data)
    console.log(data.toString())
    
    fs.writeFile(targetfile, data, (err)=>{
        if(err){
            throw err
        }
    })
})