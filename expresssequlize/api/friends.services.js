var database = require('../dbconfig/databaseconfig')
const friends = database.friends


module.exports = {
    getAllFriends: (callBack)=>{
       return friends.findAll()
                .then( data => {
                    error = null
                    return callBack(error, data)
                })
                .catch(error => {
                    data = undefined
                    return callBack(error,data)
                })
        
    },
    getFriendById: (id, callBack)=>{
        var sql = "select * from friends where id = ?"
        connection.query(sql, [id], (error, results)=>{
            if(error)
                return callBack(error, results)
            return callBack(error, results)    
        })
    }
}