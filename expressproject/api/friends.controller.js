var {
        getAllFriends, 
        getFriendById
    } = require('./friends.services')

module.exports = {
    getAllFriendsController: (req, res)=>{
        getAllFriends((error, results)=>{
            if(error){
                console.log(error)
                return
            }
                
            return res.json({
                success:1,
                data: results
            })    
        })
    },
    getFriendByIdController: (req, res)=>{
        var id=req.params.id
        getFriendById(id, (error, results)=>{
            if(error){
                console.log(error)
                return
            }
            return res.json({
                success:1,
                data: results
            })     
        })
    }
}    