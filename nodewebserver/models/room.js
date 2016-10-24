var connection = require('../connection');

function Room() {

  this.get = function(res) {
     connection.acquire(function(err, con) {
       con.query('select * from room', function(err, result) {
    	   con.release();

           var result_values = {};

           result_values["success"] = true;
           result_values["results"] = result;

           res.send(result_values);
       });
     });
   };


   this.getWhereBuilding = function(req, res) {


     var id = req.params.buildingid;

      connection.acquire(function(err, con) {
        con.query('select * from room where building = ?',id , function(err, result) {
     	   con.release();

            var result_values = {};

            result_values["success"] = true;
            result_values["results"] = result;

            res.send(result_values);
        });
      });
    };

  //  this.create = function(todo, res) {
  //     connection.acquire(function(err, con) {
  //       con.query('insert into room set ?', todo, function(err, result) {
  //         con.release();
  //         if (err) {
  //           res.send({status: 1, message: 'Room creation failed'});
  //         } else {
  //           res.send({status: 0, message: 'Room created successfully'});
  //         }
  //       });
  //     });
  //   };


}
module.exports = new Room();
