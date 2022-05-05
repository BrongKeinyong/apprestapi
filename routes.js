'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/allcustomer')    
        .get(jsonku.showdatacustomer);

    app.route('/allcustomer/:id')    
        .get(jsonku.showdatawithid);
    
    app.route('/addcustomer')    
        .post(jsonku.adddatacustomer);       
};