var express = require('express');
var router = express.Router();

const{getAllRoles} = require('../service/rolesService')
/* GET home page. */
router.get('/getAllRoles', async function(req, res, next) {
  const data = await getAllRoles()
  res.send(data);
});

module.exports = router;