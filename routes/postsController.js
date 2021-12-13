const express = require('express');
const router = express.Router();
/* const app = express(); */ //For the view part
const path = require('path'); //For the view part
const ObjectID = require('mongoose').Types.ObjectId;
const { PostsModel } = require('../models/postsModel');

//VIEW PART
/* app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs'); */

//GET DATA
router.get('/', (req, res) => {
  PostsModel.find((err, docs) => {
    //VIEW PART
    if (!err) {
      /* res.send(docs); */
      res.render(path.join(__dirname,'../views/index.ejs'), {users: docs})
    }
    else console.log("Error to get data : " + err);
  })
});

//CREATE DATA
router.post('/', (req, res) => {
  const newRecord = new PostsModel({
    author: req.body.author,
    message: req.body.message
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Error creating new data : ' + err);
  })
});

// UPDATE DATA
router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
      return res.status(400).send("ID unknow : " + req.params.id)
  }
  
  const updateRecord = {
    author: req.body.author,
    message: req.body.message
  };

  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord},
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  )
});

// DELETE DATA
router.delete("/:id",(req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send("ID unknow : " + req.params.id)
    }

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => { 
            if(!err) {
                res.send(docs)
            } else {
                console.log('Delete error: ' + err);
            }
            
        }
    )
})

module.exports = router;