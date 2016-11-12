//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var User = require('../models/user');

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('User', function() {
    beforeEach(function (done) { //Before each test we empty the database
   User.deleteAll();
        done();
});


/*
 * Test the /GET route
 */
describe('/GET user', function() {
    it('it should GET all the users(empty)', function(done) {
    chai.request(server)
        .get('/user')
        .end(function (err, res){
        res.should.have.status(200);
            res.body.should.have.property('success');
            res.body.success.should.be.eql(true);
            res.body.should.have.property('results');
            res.body.results.should.be.a('array');
            res.body.results.length.should.be.eql(0);
    done();
});
});
});

});