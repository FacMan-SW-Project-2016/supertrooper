var connection = require('../connection');

function Category() {

  this.get = function(res) {
     connection.acquire(function(err, con) {
       con.query('select * from category', function(err, result) {
         con.release();

         var result_values = {};

         result_values["success"] = true;
         result_values["results"] = result;

         res.send(result_values);
       });
     });
   };

}
module.exports = new Category();
