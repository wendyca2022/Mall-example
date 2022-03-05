
var express = require('express');
var router = express.Router();

const { login, getAllUsers,addUser } = require('../service/usersService')
/* GET users listing. */
router.post('/login', async function(req, res, next) {
  const data = await login(req.body);
  //console.log(111,data)
  res.send(data) 
});

router.post('/addUser', async function(req, res, next) {
  //console.log("新增数据",req.body)
  const data = await addUser(req.body);
  //console.log(111,data)
  res.send(data) 
});

router.get('/getAllUsers', async function(req, res, next) {
  const data = await getAllUsers(req.query);
  res.send(data)
 
});

module.exports = router;
