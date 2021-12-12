const express = require('express');
const router = express.Router();

const { PostsModel } = require('../models/postsModel');

//This route is like localhost:5500/posts'/'
router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        /* console.log(docs); */
        if(!err){
            res.send(docs);
        } else {
            console.log('Error to get datas:' + err);
        }
    })
});

router.post('/', (req, res) => {
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    });
})

module.exports = router;