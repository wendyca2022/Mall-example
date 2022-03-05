const {Schema,model} = require('mongoose'); //引入mongoose对象，解构出schema，model

const categorySchema = new Schema({  //new一个构造函数，然后用一个变量保存起来
  name:String,
  parentId:String,
  type:String,
},{versionKey:false})
const categoryModel = model('categoryModel', categorySchema,'category')

module.exports.categoryModel = categoryModel;