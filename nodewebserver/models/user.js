var connection = require('../connection');

function User() {

  this.get = function(res) {
     connection.acquire(function(err, con) {
       con.query('select * from user', function(err, result) {
    	   con.release();

           var result_values = {};

           result_values["success"] = true;
           result_values["results"] = result;

           res.send(result_values);
       });
     });
   };
   
   this.authenticate = function(user, res) {
	   connection.acquire(function(err, con) {
		   var name = user.name;
		   con.query('select * from user where name = ?', name, function(err, result) {
			   con.release();
			   if(err) {
				   res.send({status: 1, message: 'Error', user: user, error: err, name: name});
			   } else if (result.length > 0) {
				   // If password is correct:
				   res.send(result);
				   
				   //else
				   //res.send({status: 1, message: 'authentication failed', result: result});
			   } else {
				   res.send({status: 1, message: 'No such user'});
			   }
			   
			    
		   })
	   })
   };

   this.create = function(user, res) {
      connection.acquire(function(err, con) {
        con.query('insert into user set ?', user, function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'user creation failed'});
          } else {
            res.send({status: 0, message: 'user created successfully'});
          }
        });
      });
    };

    this.update = function(user, res) {
        connection.acquire(function(err, con) {
            con.query('update user set ? where ID = ?', [user, user.ID], function(err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'user update failed'});
                } else {
                    res.send({status: 0, message: 'user updated successfully'});
                }
            });
        });
    };


}
module.exports = new User();
