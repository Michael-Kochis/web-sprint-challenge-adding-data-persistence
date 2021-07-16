// do not make changes to this file
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
  typeCast: function(field, next) {
    if (field.type === 'TINY' && field.length === 1) {
      return (field.string() === 1);
    }
    return next();
  }
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/lambda.db3' },
    seeds: { directory: './data/seeds' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/test.db3' },
  },
};

