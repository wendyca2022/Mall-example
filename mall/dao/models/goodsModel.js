const {Schema,model} = require('mongoose'); //引入mongoose对象，解构出schema，model

const goodsSchema = new Schema({  //new一个构造函数，然后用一个变量保存起来
  name:String,
  title:String,
  msg:String,
  price:String,
  imgSrc:String,
  delstate:Number,
  state:Number,
  type:String,
},{versionKey:false})
const goodsModel = model('goodsModel', goodsSchema,'goods')

module.exports.goodsModel = goodsModel;