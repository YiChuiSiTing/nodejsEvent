
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBconfig');
var userSQL = require('../db/usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
// 响应一个JSON数据

module.exports = {

    register: async function (name, pwd) {
        
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    resolve(err)
                } else {
                    connection.query(userSQL.insert,[name], (err, rows) => {

                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release()
                    })
                }
            })
        })

    },
    getdata: async function () {
        return 456
    }
}