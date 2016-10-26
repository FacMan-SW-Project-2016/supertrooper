var connection = require('../connection');

function Category() {

  this.get = function(res) {
     connection.acquire(function(err, con) {
       con.query('select * from category', function(err, result) {
         con.release();

         var result_values = {};

         result_values["success"] = true;
         result_values["results"] = result;

         res.send(result_values);
       });
     });
   };


    this.create = function(category, res) {
        connection.acquire(function(err, con) {
            con.query('insert into category set ?', category, function(err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'category creation failed'});
                } else {
                    res.send({status: 0, message: 'category created successfully'});
                }
            });
        });
    };

    this.update = function(category, res) {
        connection.acquire(function(err, con) {
            con.query('update category set ? where ID = ?', [category, category.ID], function(err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'category update failed'});
                } else {
                    res.send({status: 0, message: 'category updated successfully'});
                }
            });
        });
    };

}
module.exports = new Category();
