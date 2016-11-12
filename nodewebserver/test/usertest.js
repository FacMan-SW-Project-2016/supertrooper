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



    /*
     * Test the /POST route
     */
    describe('/POST user', function() {
        it('it should POST one user', function(done) {

            var user = {
                name: "TestHorst",
                role: "admin",
                password: "Test123Test"
            }


            chai.request(server)
                .post('/user')
                .send(user)
                .end(function (err, res){
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('user created successfully');
                    done();
                });
        });
        it('user does already exist', function(done) {


            var user = {
                name: "TestHorst",
                role: "admin",
                password: "Test123Test"
            }


            User.createUser(user,function (error)
            {
                if (!error)
                {
                    chai.request(server)
                        .post('/user')
                        .send(user)
                        .end(function (err, res){
                            res.should.have.status(200);
                            res.body.should.have.property('message').eql('user with this username already exists');
                            done();
                        });
                }else
                    done(error);

            })


        });


        it('user cannot be created', function(done) {


            var user = {
                name: "testuser123",
                role: "bauer",
                password: "Test123Test"
            }



            chai.request(server)
                .post('/user')
                .end(function (err, res){
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('user creation failed');
                    done();
                });
        });
    });



    /*
     * Test the /POST route
     */
    describe('/PUT user', function() {
        it('update user data', function(done) {


            var user = {
                name: "TestHorst",
                role: "admin",
                password: "Test123Test"
            }


            User.createUser(user,function (error)
            {
                if (!error) {


                    user.role = "student";

                    chai.request(server)
                        .put('/user')
                        .send(user)
                        .end(function (err, res){
                            res.should.have.status(200);
                            res.body.should.have.property('message').eql('user updated successfully');
                            done();
                        });

                }else
                    done(error);
            });

        });


        it('update user data (no related user)', function(done) {


            var user = {
                name: "TestHorst",
                role: "admin",
                password: "Test123Test"
            }


            User.createUser(user,function (error)
            {
                if (!error) {


                    user.name = "MaierHuber";

                    chai.request(server)
                        .put('/user')
                        .send(user)
                        .end(function (err, res){
                            res.should.have.status(200);
                            res.body.should.have.property('message').eql('user update failed');
                            done();
                        });

                }else
                    done(error);
            });

        });

    });


    describe('/DELETE user', function() {
        it('delte user', function (done) {


            var user = {
                name: "TestHorst",
                role: "admin",
                password: "Test123Test"
            }


            User.createUser(user, function (error) {
                if (!error) {


                    chai.request(server)
                        .delete('/user/' + user.name)
                        .end(function (err, res) {
                            res.should.have.status(200);
                            res.body.should.have.property('message').eql('Deleted successfully');
                            done();
                        });

                }else
                    done(error);
            });

        });


        it('delte user failes', function (done) {


            var user = {
                name: "TestHorst",
                role: "admin",
                password: "Test123Test"
            }


            User.createUser(user, function (error) {
                if (!error) {


                    chai.request(server)
                        .delete('/user/' + 'HorstMaier')
                        .end(function (err, res) {
                            res.should.have.status(200);
                            res.body.should.have.property('message').eql('Deletion failed');
                            done();
                        });

                }else
                    done(error);
            });

        });
    });


    describe('/Authenticate user', function() {
        it('right credentials user', function (done) {


            var user = {
                name: "TestHorst",
                role: "admin",
                password: "Test123Test"
            }


            User.createUser(user, function (error) {
                if (!error) {


                    chai.request(server)
                        .post('/user/authenticate')
                        .send(user)
                        .end(function (err, res) {
                            res.should.have.status(200);
                            res.body.should.have.property('message').eql('User successfully authenticated!');
                            done();
                        });

                }else
                    done(error);
            });

        });



        it('wrong password', function (done) {


            var user = {
                name: "TestHorst",
                role: "admin",
                password: "Test123Test"
            }


            User.createUser(user, function (error) {
                if (!error) {


                    user.password = "meinPasswort";

                    chai.request(server)
                        .post('/user/authenticate')
                        .send(user)
                        .end(function (err, res) {
                            res.should.have.status(200);
                            res.body.should.have.property('message').eql('Wrong password.');
                            done();
                        });

                }else
                    done(error);
            });

        });


        it('No such user', function (done) {


            var user = {
                name: "TestHorst",
                role: "admin",
                password: "Test123Test"
            }


            User.createUser(user, function (error) {
                if (!error) {


                    user.name = "Horst Huber";

                    chai.request(server)
                        .post('/user/authenticate')
                        .send(user)
                        .end(function (err, res) {
                            res.should.have.status(200);
                            res.body.should.have.property('message').eql('No such user.');
                            done();
                        });

                }else
                    done(error);
            });

        });

    });

});