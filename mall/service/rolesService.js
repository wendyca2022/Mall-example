const { getAllRoles } = require('../dao/rolesDao')

module.exports.getAllRoles = async function () {  
    const data= await getAllRoles();
    console.log(222, data)
    if(data.length>0){
        return {
            message:'获取角色数据成功',
            status:1,
            data
        }
    }else{
        return {
            message:'获取角色数据失败',
            status:0,
        }
    }
}