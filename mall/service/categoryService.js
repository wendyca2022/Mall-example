const { findCategory } = require('../dao/categoryDao')  //此login 为一个全局变量

module.exports.findCategory = async function (params) {  
    const data= await findCategory(params);
    if(data.length>0){
        return {
            message:'获取商品种类数据成功',
            status:1,
            data
        }
    }else{
        return {
            message:'获取商品种类数据失败',
            status:0,
        }
    }
} 