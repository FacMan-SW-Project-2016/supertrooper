var room = require('./models/room');
var status = require('./models/status');
var category = require('./models/category');
var report = require('./models/report');
var photo = require('./models/photo');
var building = require('./models/building');
var user = require('./models/user');

module.exports = {
    configure: function (app) {


        //Room
        app.get('/room/', function (req, res) {
            room.get(res);
        });
        app.delete('/room/:id', function (req, res) {
            room.delete(req.params.id, res);
        });
        app.get('/room/:id', function (req, res) {
            room.getID(req, res);
        });
        app.post('/room/', function (req, res) {
            room.create(req.body, res);
        });
        app.put('/room/', function (req, res) {
            room.update(req.body, res);
        });
        app.get('/room_building/:buildingid', function (req, res) {
            room.getWhereBuilding(req, res);
        });


        //user
        app.get('/user/', function (req, res) {
            user.get(res);
        });
        app.get('/user_advisor/', function (req, res) {
            user.get_advisors(res);
        });
        app.post('/user/authenticate', function (req, res) {
            user.authenticate(req.body, res);
        });
        app.post('/user/', function (req, res) {
            user.create(req.body, res);
        });
        app.delete('/user/:name', function (req, res) {
            user.delete(req.params.name, res);
        });
        app.put('/user/', function (req, res) {
            user.update(req.body, res);
        });


        //building
        app.delete('/building/:id', function (req, res) {
            building.delete(req.params.id, res);
        });
        app.get('/building/', function (req, res) {
            building.get(res);
        });
        app.post('/building/', function (req, res) {
            building.create(req.body, res);
        });
        app.put('/building/', function (req, res) {
            building.update(req.body, res);
        });

        //Report
        app.get('/report/:id', function (req, res) {
            report.get(req, res);
        });
        app.get('/report/', function (req, res) {
            report.get(req, res);
        });
        app.delete('/report/:id', function (req, res) {
            report.delete(req.params.id, res);
        });
        app.post('/report/', function (req, res) {
            report.create(req.body, res);
        });
        app.put('/report/', function (req, res) {
            report.update(req.body, res);
        });


        //Status
        app.get('/status/', function (req, res) {
            status.get(res);
        });
        app.delete('/status/:id', function (req, res) {
            status.delete(req.params.id, res);
        });
        app.post('/status/', function (req, res) {
            status.create(req.body, res);
        });
        app.put('/status/', function (req, res) {
            status.update(req.body, res);
        });


        //category
        app.get('/category/', function (req, res) {
            category.get(res);
        });
        app.post('/category/', function (req, res) {
            category.create(req.body, res);
        });
        app.delete('/category/:id', function (req, res) {
            category.delete(req.params.id, res);
        });
        app.put('/category/', function (req, res) {
            category.update(req.body, res);
        });

// photo
        app.get('/photo/download/:id', function (req, res) {
            photo.download(req, res);
        });

        app.post('/photo/:id', function (req, res) {
            photo.upload(req, res);
        });

    }
};
