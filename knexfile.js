module.exports = {
    development: {
       client: 'mssql',
       connection: {
           host: 'localhost',
           user: 'sa',
           password: 'pass@word1',
           database: 'learn_db'
       },
       pool: {
           min: 2,
           max: 20
       },
       migrations: {
           tableName: 'knex_migrations'
       }
   },
   test: {
    client: 'mssql',
    connection: {
        host: 'localhost',
        user: 'sa',
        password: 'pass@word1',
        database: 'learn_db_test'
    },
    pool: {
        min: 2,
        max: 20
    },
    migrations: {
        tableName: 'knex_migrations'
    }
}
};