module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-180.railway.app'),
      port: env.int('DATABASE_PORT', 5472),
      database: env('DATABASE_NAME', 'smelly frog'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'AcLnll9li5SOvMKp8wqx'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
