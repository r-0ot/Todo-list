'use strict';

var Task = require('./api/models/todoListModel');

/*Function names are self explanatory*/

exports.list_all_tasks = function(req, res) {
  /* Write your code here*/
  Task.find({}).then(data => res.send(data));
};


exports.create_a_task = function(req, res) {
  /*Write your code here*/
  var data = new Task ({name : req.body.name});
  data.save().then(d => res.send(d));
};


exports.read_a_task = function(req, res) {
  /*write your code here*/
  var id = req.params.taskId;
  Task.findById(id).then(data => res.send(data));
};


exports.update_a_task = function(req, res) {
  /*write your code here*/
  var id=req.params.taskId;
  var name = req.body.name;
  Task.findByIdAndUpdate(id,{$set : {name : name}}).then(data => res.send(data));
};


exports.delete_a_task = function(req, res) {
 /*write your code here*/
 var id = req.params.taskId;
 Task.findByIdAndDelete(id).then(data => res.send(data));
};