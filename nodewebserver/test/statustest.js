//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var Status = require('../models/status');

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var should = chai.should();

chai.use(chaiHttp);
//status test block
describe('Status', function () {
    beforeEach(function (done) { //Before each test we empty the database
        Status.deleteAll();
        done();
    });


    describe('/GET status', function () {

        it('it should GET all the status(empty)', function (done) {
            chai.request(server)
                .get('/status')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    describe('/POST status', function () {


        it('it should create a status', function (done) {

            var status = {
                type: "test"
            }

            chai.request(server)
                .post('/status')
                .send(status)
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('Status created successfully');
                    done();
                });
        });

        it('it cannot create status', function (done) {

            var status = {}
            chai.request(server)
                .post('/status')
                .send(status)
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('Status creation failed');
                    done();
                });
        });

    });


    describe('/Delete status', function () {

        it('it should delete a status', function (done) {

            var status = {
                ID: 44,
                type: "test"
            }

            Status.createStatus(status, function (error) {
                if (!error) {
                    chai.request(server)
                        .delete('/status/' + '44')
                        .end(function (err, res) {
                            res.should.have.status(200);
                            res.body.should.have.property('message').eql('Deleted successfully');
                            done();
                        });
                } else
                    done(error);
            })
        });
    });


});