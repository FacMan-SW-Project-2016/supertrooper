var connection = require('../connection');

function Building() {

  this.get = function(res) {
     connection.acquire(function(err, con) {
       con.query('select * from building', function(err, result) {
    	   con.release();

           var result_values = {};

           result_values["success"] = true;
           result_values["results"] = result;

           res.send(result_values);
       });
     });
   };

   this.create = function(building, res) {
      connection.acquire(function(err, con) {
        con.query('insert into building set ?', building, function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'Building creation failed'});
          } else {
            res.send({status: 0, message: 'Building created successfully'});
          }
        });
      });
    };

    this.update = function(building, res) {
        connection.acquire(function(err, con) {
            con.query('update building set ? where ID = ?', [building, building.ID], function(err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'building update failed'});
                } else {
                    res.send({status: 0, message: 'building updated successfully'});
                }
            });
        });
    };


}
module.exports = new Building();
