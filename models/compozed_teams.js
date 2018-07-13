var db = require('../config/db').bookshelf;

var CompozedTeams = db.Model.extend({
  tableName: 'compozed_teams'
});

module.exports = CompozedTeams;

