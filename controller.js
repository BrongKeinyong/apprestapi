'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok('application REST API running!',res)
}; 

//show data cust
exports.showdata = function(req,res){
    connection.query('SELECT * FROM `tb_customer`', function(error,rows,fileds){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows,res);
        }
    });
};