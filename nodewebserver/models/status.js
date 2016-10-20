var connection = require('../connection');

function Status() {

  this.get = function(res) {
     connection.acquire(function(err, con) {
       con.query('select * from status', function(err, result) {
         con.release();
         res.send(result);
       });
     });
   };

   this.create = function(todo, res) {
      connection.acquire(function(err, con) {
        con.query('insert into status set ?', todo, function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'Status creation failed'});
          } else {
            res.send({status: 0, message: 'Status created successfully'});
          }
        });
      });
    };


}
module.exports = new Status();
