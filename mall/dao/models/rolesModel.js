const {Schema,model} = require('mongoose'); //引入mongoose对象，解构出schema，model

const rolesSchema = new Schema({  //new一个构造函数，然后用一个变量保存起来
    name:String,
    state:String,
},{versionKey:false})
const rolesModel = model('rolesModel', rolesSchema,'roles')

module.exports.rolesModel = rolesModel;