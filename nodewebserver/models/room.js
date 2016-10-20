var connection = require('../connection');

function Room() {

  this.get = function(res) {
     connection.acquire(function(err, con) {
       con.query('select * from room', function(err, result) {
         con.release();
         res.send(result);
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
