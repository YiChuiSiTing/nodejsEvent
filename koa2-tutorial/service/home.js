
const HomeDao = require('../dao/home')
 module.exports = {
    register: async function(name, pwd) {
      let data 
      let res = await HomeDao.register(name,pwd)
      console.log(res)
      
      if(res){
        data = {
          status: 0,
          data: {
            title: "注册成功",
            content: "欢迎进入个人中心",
          }
        }
      }else{
        data = {
          status: -1,
          data: {
            title: '注册失败',
            content: "请重试"
          }
        }
      }
      return data
    }
  }