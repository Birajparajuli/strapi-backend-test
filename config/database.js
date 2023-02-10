module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'goenergycom_strapi_backend'),
      user: env('DATABASE_USERNAME', 'goenergycom_user'),
      password: env('DATABASE_PASSWORD', '[O#.%*OG#%S@'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
