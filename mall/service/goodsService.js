const { findGoods,findGoodsByName, addGoods } = require('../dao/goodsDao')  //此login 为一个全局变量

module.exports.findGoods = async function (params) {  
    const data= await findGoods(params);
    //console.log(222, data)
    if(data.length>0){
        return {
            message:'获取商品数据成功',
            status:1,
            data
        }
    }else{
        return {
            message:'获取商品数据失败',
            status:0,
        }
    }
}

module.exports.findGoodsByName = async function (params) {  
    const data= await findGoodsByName(params);
    if(data.length>0){
        return {
            message:'获取商品数据成功',
            status:1,
            data
        }
    }else{
        return {
            message:'获取商品数据失败',
            status:0,
        }
    }
}

module.exports.addGoods = async function (params) { 
    const data = await addGoods(params);
    if(data._id){
        return {
            message:'添加商品数据成功',
            status:1,
            data
        }
    }else{
        return {
            message:'添加商品数据失败',
            status:0,
        }
    }
}
    
