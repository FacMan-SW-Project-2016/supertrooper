var connection = require('../connection');

function Report() {

  this.get = function(res) {
     connection.acquire(function(err, con) {
       con.query('select * from report', function(err, result) {
         con.release();
         res.send(result);
       });
     });
   };

   this.create = function(todo, res) {
      connection.acquire(function(err, con) {
        con.query('insert into report set ?', todo, function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'Report creation failed'});
          } else {
            res.send({status: 0, message: 'Report created successfully'});
          }
        });
      });
    };


}
module.exports = new Report();
