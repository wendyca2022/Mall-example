var express = require('express');
const { findGoods,findGoodsByName, addGoods } = require('../service/goodsService') 
var router = express.Router();

const {uploadFiles,moveFiles, removeFiles} = require('../utils/handleFiles')

/* GET home page. */
router.get('/findGoods', async function(req, res, next) {
    //console.log(111,req.query);
    const data = await findGoods(req.query)
    res.send(data)
});

router.post('/findGoodsByName', async function(req, res, next) {
    const data = await findGoodsByName(req.body)
    res.send(data)
});

//router.post('/fileUpload', uploadToGoods.single('imgSrc'), GoodsC.fileUpload)
router.post('/fileUpload', async function(req, res, next) {
    //console.log(111,req.files)
    const upload = uploadFiles({
        path:'./public/images/temp',
        key:"picture-card",   //file
        size:1000,
    })
    upload(req,res,(err)=>{
        if(err){
            console.log('图片上传失败', err);
        }else{
            res.send({
                message:'图片上传成功',
                status:1,
                data:req.files[0].filename,
            })
        }
    })
    
});

router.post('/addGoods', async function(req, res, next) {
    //console.log(111,req.body)
    const data = await addGoods(req.body)
    //console.log(111,data)
    if(data.status && req.body.imgSrc){
        console.log(111)
        moveFiles({
            fromPath:'./public/images/temp',
            toPath:'./public/images/goods',
            filename:req.body.imgSrc,
        });
        removeFiles('./public/images/temp')
    }
    res.send(data)
});
module.exports = router;