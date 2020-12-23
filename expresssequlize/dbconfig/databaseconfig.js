const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_NAME,
                                process.env.DATABASE_USER,
                                process.env.DATABASE_PASSWORD,
                                {
                                    host: process.env.DATABASE_HOST,
                                    port: process.env.DATABASE_PORT,
                                    dialect:"mysql",
                                    operatorAliases: false,
                                    define:{
                                        timestamps: false
                                    }
                                },
                                {
                                    max: 8,
                                    min: 0,
                                    acquire: 2000,
                                    idle: 1000
                                })

const database = {}
database.Sequelize = Sequelize
database.sequelize = sequelize

database.friends  = require('../model/friends.model')(sequelize, Sequelize)

module.exports = database
