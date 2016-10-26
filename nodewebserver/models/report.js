var connection = require('../connection');

function Report() {


  this.update = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('update report set ? where id = ?', [todo, todo.id], function(err, result) {
        con.release();
          if (res) {
              if (err) {
                  res.send({status: 1, message: 'report update failed'});
              } else {
                  res.send({status: 0, message: 'report updated successfully'});
              }
          }
      });
    });
  };

    this.update = function(report, res) {
        connection.acquire(function(err, con) {
            con.query('update report set ? where ID = ?', [report, report.ID], function(err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'report update failed'});
                } else {
                    res.send({status: 0, message: 'report updated successfully'});
                }
            });
        });
    };


  this.get = function(req, res) {
     connection.acquire(function(err, con) {


         var id = req.params.id;
         var sql = 'select * from report';

         if (id != undefined)
         {
           sql += ' where id = ' + id;
         }
       con.query(sql, function(err, result) {
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
        	  console.log("Error");
            console.log(todo);
            res.send({status: 404, message: 'Report creation failed'});
          } else {
        	  console.log("Success");
            res.send({status: 0, message: 'Report created successfully', insertId: result.insertId});
          }
        });
      });
    };


}
module.exports = new Report();
