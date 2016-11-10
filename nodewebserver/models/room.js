var connection = require('../connection');

function Room() {


    this.create = function(room, res) {
        connection.acquire(function(err, con) {
            con.query('insert into room set ?', room, function(err, result) {
                con.release();
                if (err) {
                    res.send({
                        status: 1,
                        message: 'room creation failed'
                    });
                } else {
                    res.send({
                        status: 0,
                        message: 'room created successfully'
                    });
                }
            });
        });
    };

    this.update = function(room, res) {
        connection.acquire(function(err, con) {
            con.query('update room set ? where ID = ?', [room, room.ID], function(err, result) {
                con.release();
                if (err) {
                    res.send({
                        status: 1,
                        message: 'room update failed'
                    });
                } else {
                    res.send({
                        status: 0,
                        message: 'room updated successfully'
                    });
                }
            });
        });
    };


    this.get = function(res) {
        connection.acquire(function(err, con) {
            con.query('select * from room', function(err, result) {
                con.release();

                var result_values = {};

                result_values["success"] = true;
                result_values["results"] = result;

                res.send(result_values);
            });
        });
    };

    this.delete = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('delete from room where id = ?', [id], function(err, result) {
                con.release();
                if (err) {
                    res.send({
                        status: 1,
                        message: 'Failed to delete'
                    });
                } else {
                    res.send({
                        status: 0,
                        message: 'Deleted successfully'
                    });
                }
            });
        });
    };


    this.getID = function(req, res) {
        connection.acquire(function(err, con) {

            var id = req.params.id;

            con.query('select * from room where ID = ?', id, function(err, result) {
                con.release();

                var result_values = {};

                result_values["success"] = true;
                result_values["results"] = result;

                res.send(result_values);
            });
        });
    };


    this.getWhereBuilding = function(req, res) {


        var id = req.params.buildingid;

        connection.acquire(function(err, con) {
            con.query('select * from room where building = ?', id, function(err, result) {
                con.release();

                var result_values = {};

                result_values["success"] = true;
                result_values["results"] = result;

                res.send(result_values);
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
