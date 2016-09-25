var express = require('express');
var router  = express.Router();
var mongojs = require('mongojs');
var url = "mongodb://Midas:Midas#10@ds033046.mlab.com:33046/midasmeantodos";
var db = mongojs(url,['todos']);
//Get All todos
router.get('/todos',(req,res,next)=>{
  db.todos.find((err,todos)=>{
    if(err){
      res.send(err);
    }else{
      console.log(todos);
      res.json(todos);
    }
  });
});
//Get todo
router.get('/todo/:id',(req,res,next)=>{
  db.todos.findOne({
    _id: mongojs.ObjectId(req.params.id)
  },(err,todo)=>{
    if(err){
      res.send(err);
    }else{
      res.json(todo);
    }
  });

});
//Save todo
router.post('/todo',(req,res,next)=>{
  var todo = req.body;
  if(!todo.text || !(todo.isCompleted + '')){
    res.status(400);
    console.log(req.body);
    res.json({"error":"Invalid Data"});
  }else {
    db.todos.save(todo,(err,result)=>{
      if(err){
        res.send(err);
      }else{
          res.json(result);
      }
    })
  }
});

//Update todo
router.put('/todo/:id',(req,res,next)=>{
  var todo = req.body;
  var updObj = {};
  if(todo.isCompleted){
    updObj.isCompleted = todo.isCompleted;
  }
  if(todo.text){
    updObj.text = todo.text;
  }
  if(!updObj){
    res.status(400);
    res.json({"error":"Invalid Data"});
  }else {
    db.todos.update({
      _id : mongojs.ObjectId(req.params.id)
    },updObj,{},(err,result)=>{
      res.json(result);
    })
  }
});

//Delete todo
router.delete('/todo/:id',(req,res,next)=>{
  db.todos.remove({
    _id: mongojs.ObjectId(req.params.id)
  },(err,result)=>{
    if(err){
      res.send(err);
    }else{
      res.json(result);
    }
  });

});

module.exports = router;
