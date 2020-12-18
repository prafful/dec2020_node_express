var connection = require('../dbconfig/databaseconfig')

module.exports = {
    getAllFriends: (callBack)=>{
        var sql = "select * from friends"
        connection.query(sql, (error, results)=>{
            if(error)
                callBack(error)
            return  callBack(results)   
        })
    },
    getFriendById: (id, callBack)=>{
        var sql = "select * from friends where id = ?"
        connection.query(sql, [id], (error, results)=>{
            if(error)
                callBack(error)
            return callBack(results)    
        })
    }
}