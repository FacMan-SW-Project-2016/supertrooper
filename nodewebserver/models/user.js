var connection = require('../connection');

function User() {

  this.get = function(res) {
     connection.acquire(function(err, con) {
       con.query('select * from user', function(err, result) {
    	   con.release();

           var result_values = {};

           result_values["success"] = true;
           result_values["results"] = result;

           res.send( result_values);
       });
     });
   };




// just returns advisors (Sachbearbeiter)
this.get_advisors = function(res) {
   connection.acquire(function(err, con) {
     con.query('select * from user where role = "advisor"', function(err, result) {
       con.release();

         var result_values = {};

         result_values["success"] = true;
         result_values["results"] = result;

         res.send( result_values);
     });
   });
 };


   this.create = function(user, res) {
       connection.acquire(function(err, con) {
           con.query('insert into user set ?', user, function(err, result) {
               con.release();
               if (err) {
            	   if (err.code == "ER_DUP_ENTRY") {
            		   res.send({status: 2, message: 'user with this username already exists'});
				} else {
	                   res.send({status: 1, message: 'user creation failed', error: err});
				}
               } else {
                   res.send({status: 0, message: 'user created successfully'});
               }
           });
       });
   };

   //util method for tests
    this.createUser = function(user, callback) {
        connection.acquire(function(err, con) {
            con.query('insert into user set ?', user, function(err, result) {
                con.release();
                callback(err);
            });
        });
    };


    this.delete = function(id, res) {
        connection.acquire(function (err, con) {
            con.query('delete from user where name = ?', [id], function (err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Failed to delete'});
                } else {
                    res.send({status: 0, message: 'Deleted successfully'});
                }
            });
        });
    };

    //util method for tests
    this.deleteAll = function(){
        connection.acquire(function (err, con) {
        con.query('delete from user', function (err) {
            con.release();
            if (err) {
                return false;
            } else {
               return true;
            }
        });
    });
    };


    this.authenticate = function(user, res) {
	   connection.acquire(function(err, con) {
		   var name = user.name;
		   con.query('select * from user where name = ?', name, function(err, result) {
			   con.release();
			   if(err) {
				   res.send({status: 1, message: 'Error', error: err});
			   } else if (result.length > 0) {
				   // Check if password is correct:
				   if (result[0].password == user.password) {
					   res.send({status: 0, message: 'User successfully authenticated!', role: result[0].role});
				   } else {
					   res.send({status: 2, message: 'Wrong password.'});
				   }
			   } else {
				   res.send({status: 3, message: 'No such user.'});
			   }


		   })
	   })
   };

    this.update = function(user, res) {
        connection.acquire(function(err, con) {
            con.query('update user set ? where name = ?', [user, user.name], function(err, result) {
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
