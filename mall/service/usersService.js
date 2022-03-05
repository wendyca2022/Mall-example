const { login,getAllUsers, addUser } = require('../dao/usersDao')  //此login 为一个全局变量

module.exports.login = async function (user) {      //此login为module.exports身上的一个属性
    //login(user);  //此处调用的是第三层传过来的login来传参
    const data = await login(user);//接受了第三层返回的data
    //console.log(222,data)
    if (data.length>0) {
        const jwt = require('jsonwebtoken');
        const username = data[0].account
        const token = jwt.sign(
            { username },
            'miyao',
            { expiresIn: 60 * 10 }
        );
        return {
            message: '登陆成功',
            status: 1,
            data,
            token,
        }
    } else {
        return {
            message: '登陆失败',
            status: 0
        }
    }
}

module.exports.getAllUsers = async function () {  
    const data= await getAllUsers();
    //console.log(222, data)
    if (data.length>0) {
        return {
            message: '成功获取用户资料',
            status: 1,
            data,
        }
    }else{
        return {
            message: '获取用户资料失败',
            status: 0
        }
    }
}

module.exports.addUser = async function (params) { 
    const data = await addUser(params)
    //console.log('新增',data)
    if (data._id) {
        return {
            message: '成功添加用户资料',
            status: 1,
            data,
        }
    }else{
        return {
            message: '添加用户资料失败',
            status: 0
        }
    }
 }