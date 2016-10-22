var express =   require("express");
var bodyParser =    require("body-parser");
var multer  =   require('multer');
var app =   express();
var cors = require('cors');
var fs = require('fs');

app.use(bodyParser.json());

app.use(cors());
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage : storage }).array('userPhoto',2);



    app.get('/api/download', function(req, res){
        var file = './uploads/file.jpg';
        res.download(file); // Set disposition and send it.
    });



app.post('/api/photo',function(req,res){
    upload(req,res,function(err) {
        //console.log(req.body);
        //console.log(req.files);
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});
