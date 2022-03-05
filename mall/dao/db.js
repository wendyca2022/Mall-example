//链接数据库mongodb
const mongoose = require('mongoose');

// //require models that not use totally
// require('./models/rolesModel')
// require('./models/categoryModel')
// require('./models/goodsModel')
// require('./models/usersModel')

const dbURI = 'mongodb://localhost:27017/snailmall';
mongoose.connect(dbURI);
mongoose.connection.on('connected', function(){
  console.log('mall数据库连接成功'+dbURI)

  //console.log('连接成功models:', mongoose.models)
  
})