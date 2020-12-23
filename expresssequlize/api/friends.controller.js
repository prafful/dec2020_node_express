
var {
        getAllFriends, 
        getFriendById
    } = require('./friends.services')

module.exports = {
    getAllFriendsController: (req, res)=>{
        getAllFriends((error, results)=>{
            if(error != null){
                 console.log("Error....")
                 console.log(error)
                 res.status(500).send({
                     message: "Error in middleware!!!!",
                     error: error
                 })
            }
           if(results != undefined){
                console.log("Results:")
                console.log(results)
                res.json({
                    success:1,
                    data: results
                })    
           }
           
        })
    },
    getFriendByIdController: (req, res)=>{
        var id=req.params.id
        getFriendById(id, (error, results)=>{
            if(error != null){
                console.log(error)
                res.status(500).send({
                    message: "Error in middleware!!!!",
                    error: error
                })
            }
            if(results != undefined){
                console.log("Results:")
                console.log(results)
                res.json({
                    success:1,
                    data: results
                })    
           }
        })
    }
}    