//var todo = require('./models/todo');
var room = require('./models/room');
var status = require('./models/status');
var category = require('./models/category');
var report = require('./models/report');
var photo = require('./models/photo');
var building = require('./models/building');

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

    //Room where building
    app.get('/room_building/:buildingid', function(req, res) {
      room.getWhereBuilding(req, res);
    });
    //Building table
    app.get('/building/', function(req, res) {
      building.get(res);
    });


    //Report table
    //select
    app.get('/report/:id', function(req, res) {
      report.get(req, res);
    });
    app.get('/report/', function(req, res) {
      report.get(req, res);
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


// photo up/download
    app.get('/photo/download/:id', function(req, res){
      photo.download(req, res);
    });

    app.post('/photo/:id',function(req,res){
        photo.upload(req, res);
    });

// photo up/download

  }
};
