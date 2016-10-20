//var todo = require('./models/todo');
var room = require('./models/room');
var status = require('./models/status');
var category = require('./models/category');
var report = require('./models/report');

module.exports = {
  configure: function(app) {

    //sample todo
    // app.get('/todo/', function(req, res) {
    //   todo.get(res);
    // });
    //
    // app.post('/todo/', function(req, res) {
    //   todo.create(req.body, res);
    // });
    //
    // app.put('/todo/', function(req, res) {
    //   todo.update(req.body, res);
    // });
    //
    // app.delete('/todo/:id/', function(req, res) {
    //   todo.delete(req.params.id, res);
    // });


    //Room table
    app.get('/room/', function(req, res) {
      room.get(res);
    });

    //Report table
    //select
    app.get('/report/', function(req, res) {
      report.get(res);
    });

    //insert
    app.post('/report/', function(req, res) {
      report.create(req.body, res);
    });


    //Status table
    app.get('/status/', function(req, res) {
      status.get(res);
    });

    //category table
    app.get('/category/', function(req, res) {
      category.get(res);
    });

  }
};
