const {goodsModel} = require('./models/goodsModel')

module.exports.findGoods = async function (params) {  
    const data = await goodsModel.find(params);//拿到Model查询
    return data;
} 

module.exports.findGoodsByName = async function (params) { 
    const {searchData, searchType, delstate} = params;
    // const regName = new RegExp(`${searchData}`)  //借鉴语音笔记
    // const obj = {}
    // obj[searchType] = {$regex:regName} 
    // const data = await goodsModel.find(obj);
    const data = await goodsModel.find({  //借鉴江岚express
        [searchType]:{$regex:searchData, $options:'#$i'},
        delstate,
    });
    //console.log(333,data)
    return data;
}

module.exports.addGoods = async function (params) {  
    const data = await goodsModel.create(params);//拿到Model查询
    return data;
} 

