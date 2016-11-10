//var todo = require('./models/todo');
var room = require('./models/room');
var status = require('./models/status');
var category = require('./models/category');
var report = require('./models/report');
var photo = require('./models/photo');
var building = require('./models/building');
var user = require('./models/user');

module.exports = {
  configure: function(app) {

    //sample todo
    // app.get('/todo/', function(req, res) {
    //   todo.get(res);
    // });
    //    // app.post('/todo/', function(req, res) {
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

    //Room table
    app.delete('/room/:id', function(req, res) {
      room.delete(req.params.id, res);
    });
    //Room table
    app.get('/room/:id', function(req, res) {
      room.getID(req, res);
    });

    //insert
    app.post('/room/', function(req, res) {
      room.create(req.body, res);
    });

    //update report
    app.put('/room/', function(req, res) {
      room.update(req.body, res);
    });

    app.get('/user/', function (req, res){
      user.get(res);
    });

    //User authentication
    app.post('/user/authenticate', function (req, res){
    	user.authenticate(req.body, res);
    });

    app.post('/user/', function (req, res){
      user.create(req.body, res);
    });

    //Room table
    app.delete('/user/:name', function(req, res) {
      user.delete(req.params.name, res);
    });



    //Room where building
    app.get('/room_building/:buildingid', function(req, res) {
      room.getWhereBuilding(req, res);
    });

    //Room table
    app.delete('/building/:id', function(req, res) {
      building.delete(req.params.id, res);
    });
    //Building table
    app.get('/building/', function(req, res) {
      building.get(res);
    });

    //insert
    app.post('/building/', function(req, res) {
      building.create(req.body, res);
    });

    //update report
    app.put('/building/', function(req, res) {
      building.update(req.body, res);
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

    //update report
      app.put('/report/', function(req, res) {
      report.update(req.body, res);
     });


    //Status table
    app.get('/status/', function(req, res) {
      status.get(res);
    });

    //Room table
    app.delete('/status/:id', function(req, res) {
      status.delete(req.params.id, res);
    });

    //insert
    app.post('/status/', function(req, res) {
      status.create(req.body, res);
    });

    //update report
    app.put('/status/', function(req, res) {
      status.update(req.body, res);
    });


    //category table
    app.get('/category/', function(req, res) {
      category.get(res);
    });

    //insert
    app.post('/category/', function(req, res) {
      category.create(req.body, res);
    });

    //Room table
    app.delete('/category/:id', function(req, res) {
      category.delete(req.params.id, res);
    });


    //update report
    app.put('/category/', function(req, res) {
      category.update(req.body, res);
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
