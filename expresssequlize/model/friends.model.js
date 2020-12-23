module.exports = (sequelize, Sequelize)=>{
    const friends = sequelize.define("friends", {
        id:{
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: Sequelize.STRING
        },
        location:{
            type:Sequelize.STRING
        }
    })
    return friends
}