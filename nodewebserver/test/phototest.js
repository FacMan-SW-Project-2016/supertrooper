//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var Status = require('../models/photo');

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var should = chai.should();
var fs = require('file-system');
var FormData = require('form-data');
var filename = 'test_photo.JPG';
var uploadPath = './uploads/userPhoto-4711.jpg';

chai.use(chaiHttp);

//photo test block
describe('Photo', function () {

    beforeEach(function (done) { //Before each test we remove the existing test photo

        if (fs.existsSync(uploadPath)) {
            fs.unlinkSync(uploadPath);
        }
        done();
    });

    describe('/upload photo', function () {

        it('it should upload a photo', function (done) {

            chai.request(server)
                .post('/photo/4711')
                .attach('userPhoto', fs.readFileSync('./test/' + filename), filename)
                .end(function (err, res) {
                    if (err) {
                        chai.assert(failse, err.message);
                    } else {

                        res.should.have.status(200)

                        if (fs.existsSync(uploadPath)) {
                            chai.assert(true, "File uploaded");
                        } else {
                            chai.assert(false, "File not uploaded");
                        }
                        done();
                    }
                })


        });

    });

});