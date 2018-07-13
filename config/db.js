// 'use strict';

// var DBConfig = {
//     client: 'mssql',
//         connection: {
//             host: 'localhost',
//             user: 'sa',
//             password: 'pass@word1',
//             database: 'learn_db'
//         }
// };

// var knex = require('knex')(DBConfig);
// const bookshelf = require('bookshelf')(knex);

// module.exports.bookshelf = bookshelf;

'use strict';
const knexFile = require('../knexfile');
const envName = process.env.NODE_ENV || 'development';
const config = knexFile[envName];
var knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);

module.exports.bookshelf = bookshelf;