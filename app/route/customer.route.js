module.exports = function(app) { 
    const customers = require('../controller/custumer.controller');

    // Retrieve all Customer
    app.get('/api/customers', customers.findAll);
}