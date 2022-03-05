const {categoryModel} = require('./models/categoryModel')

module.exports.findCategory = async function (params) {  
    const data = await categoryModel.find(params);//拿到Model查询
    return data;
} 