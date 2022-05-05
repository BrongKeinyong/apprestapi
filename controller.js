'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok('application REST API running!',res)
}; 

//show data cust
exports.showdatacustomer = function(req,res){
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
        }
    });
};

//add data cust
exports.adddatacustomer = function(req,res){
    var name = req.body.name;
    var gender = req.body.gender;
    var phone = req.body.phone;

    connection.query('INSERT INTO tb_customer (name,gender,phone) VALUES(?,?,?);',
        [name, gender, phone],
        function(error,rows,fields){
            if(error){
                console.log(error);
            }else {
                response.ok("success add customer",res);
        }
    });
};