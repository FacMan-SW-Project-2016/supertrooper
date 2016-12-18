var connection = require('../connection');

function Report() {


    this.update = function(report, res) {
        connection.acquire(function(err, con) {
            con.query('update report set ? where ID = ?', [report, report.ID], function(err, result) {
                con.release();
                if (err) {
                	console.log("Update-error: " + err);
                 if (res) res.send({status: 1, message: 'report update failed'});
                } else {
                    console.log ("successfull");

                  if (res) res.send({status: 0, message: 'report updated successfully'});
                }
            });
        });
    };


  this.get = function(req, res) {
     connection.acquire(function(err, con) {


         var id = req.params.id;
         var sql = 'select * from report ';

         if (id != undefined)
         {
           sql += ' where id = ' + id;
         }else {
           sql += ' order by moment desc';
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
        	  console.log("Create Error");
            console.log(todo);
            res.send({status: 404, message: 'Report creation failed'});
          } else {
        	  console.log("Create Success");
            res.send({status: 0, message: 'Report created successfully', insertId: result.insertId});
          }
        });
      });
    };

    this.delete = function(id, res) {
        connection.acquire(function (err, con) {
            con.query('delete from report where ID = ?', [id], function (err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Failed to delete'});
                } else {
                    res.send({status: 0, message: 'Deleted successfully'});
                }
            });
        });
    };


}
module.exports = new Report();
