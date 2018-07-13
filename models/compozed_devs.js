var db = require('../config/db').bookshelf;

var CompozedDevs = db.Model.extend({
  tableName: 'compozed_devs'
});

module.exports = CompozedDevs;