var db = require('../config/db').bookshelf;

var CompozedProducts = db.Model.extend({
  tableName: 'compozed_products'
});

module.exports = CompozedProducts;