'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok('application REST API running!',res)
}; 

//show data cust
exports.showdata = function(req,res){
    connection.query('SELECT * FROM tb_customer', function(error,rows,fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows,res);
        }
    });
};

//show data cust by id
exports.showdatawithid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM tb_customer WHERE id_cust = ?', [id],
        function(error,rows,fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows,res);
        }});
};