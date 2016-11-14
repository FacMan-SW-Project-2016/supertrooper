var multer = require('multer');
var report = require('./report');

function Photo()
{

this.upload = function(req, res) {


   var id = req.params.id;

   console.log(id);

  var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + '-' + id + '.jpg');
    }
  });
  var upload = multer({ storage : storage }).array('userPhoto',1);

  upload(req,res,function(err) {
      //console.log(req.body);
      //console.log(req.files);
      if(err) {
          console.log("Error");
          return res.end("Error uploading file.");
      }
      console.log("Success");
      res.end("File is uploaded");

var updateData = {};
updateData.ID = id;
updateData.data = 'userPhoto-' + id + '.jpg';

      report.update(updateData, null);

  });
 };



 this.download = function (req, res)
 {
   var id = req.params.id;

   var file = './uploads/userPhoto' + '-' + id + '.jpg';
   res.download(file); // Set disposition and send it.

 }


}
module.exports = new Photo();
