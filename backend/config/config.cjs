// config/config.cjs
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'dozy',
    password: process.env.DB_PASS || 'sasa',
    database: process.env.DB_NAME || 'database_development',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mssql',
    port: parseInt(process.env.DB_PORT) || 1433,
    dialectOptions: {
      options: {
        encrypt: false,
        trustServerCertificate: true
      }
    },
   
  }
};