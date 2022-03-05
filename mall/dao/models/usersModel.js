//真实数据库
const {Schema,model} = require('mongoose'); //引入mongoose对象，解构出schema，model

//var roles = require('./rolesModel')

const usersSchema = new Schema({  //new一个构造函数，然后用一个变量保存起来
  account:String,
  email:String,
  password:String,
  state:String,
  rolesId:{
    type:Schema.Types.ObjectId,
    ref:'rolesModel'
  }
},{versionKey:false})
const usersModel = model('usersModel', usersSchema,'users')

module.exports.usersModel = usersModel;