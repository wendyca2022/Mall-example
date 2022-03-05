var express = require('express');
const { findCategory } = require('../service/categoryService') 
var router = express.Router();


/* GET home page. */
router.get('/findCategory', async function(req, res, next) {
    const data = await findCategory(req.query)
    res.send(data)
});

module.exports = router;