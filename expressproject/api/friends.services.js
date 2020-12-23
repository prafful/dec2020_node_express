var connection = require('../dbconfig/databaseconfig')

module.exports = {
    getAllFriends: (callBack)=>{
        var sql = "select * from friends"
        connection.query(sql, (error, results)=>{
            if(error){
                 //console.log("Error....")
                 //console.log(error)
                 return callBack(error, results)
            }
               
                //callBack(error)
            return  callBack(error,results)   
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