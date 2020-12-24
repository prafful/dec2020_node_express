var jwt = require('jsonwebtoken')


module.exports = (credentials=[])=>{
    return (req, res, next)=>{

        if(typeof(credentials) === "string"){
            credentials = [credentials]
        }
        //console.log(req)
        //extract the token from request
        var token = req.headers['authorization']
        if(!token){
                res.status(401).send({
                    message: "Access denied!"
            })
        }else{
            //check if token is valid
            var getToken = token.slice(7)
            jwt.verify(getToken, "somesecretkey", (err, decoded)=>{
                if(err){
                    console.log("JWT is having error: " + JSON.stringify(err))
                    res.status(401).send({
                        message: "Access denied with bad token!"
                    })
                }
                console.log(decoded)
                console.log(credentials)
                if(credentials.length>0){
                    if(decoded.scope && decoded.scope.length && credentials.some(role => decoded.scope.indexOf(role)>=0)){
                        next()
                    }else{
                        res.status(401).send({
                            message: "Access denied with invalid role!"
                        })
                    }
                }else{
                    //user is already authenticated and authorized
                    next()
                }

            })

        }


        next()
    }
    
}