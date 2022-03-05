const {usersModel} = require('./models/usersModel')

module.exports.login = async function(user){   //接收到第一层传过来的数据
    const data = await usersModel.find(user).populate({path:'rolesId'});//拿到Model查询
    //console.log(data)
    return data;
}

module.exports.getAllUsers = async function () {  
    const data= await usersModel.find().populate({path:'rolesId'});
    return data;
}

module.exports.addUser = async function (params) {     
    const data= await usersModel.create(params);
    //console.log("第三层",data)
    return data;
}