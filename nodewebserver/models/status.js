var connection = require('../connection');

function Status() {

    this.update = function(status, res) {
        connection.acquire(function(err, con) {
            con.query('update status set ? where ID = ?', [status, status.ID], function(err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'status update failed'});
                } else {
                    res.send({status: 0, message: 'status updated successfully'});
                }
            });
        });
    };

  this.get = function(res) {
     connection.acquire(function(err, con) {
       con.query('select * from status', function(err, result) {
         con.release();
         res.send(result);
       });
     });
   };


    this.delete = function(id, res) {
        connection.acquire(function (err, con) {
            con.query('delete from status where id = ?', [id], function (err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Failed to delete'});
                } else {
                    res.send({status: 0, message: 'Deleted successfully'});
                }
            });
        });
    };


    this.create = function(status, res) {
      connection.acquire(function(err, con) {
        con.query('insert into status set ?', status, function(err, result) {
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
