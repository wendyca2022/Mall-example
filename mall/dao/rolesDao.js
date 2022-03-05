const {rolesModel} = require('./models/rolesModel')

module.exports.getAllRoles = async function () {  
    const data= await rolesModel.find();
    return data;
}