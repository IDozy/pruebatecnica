import dotenv from "dotenv";
dotenv.config();

const config = {
  development: {
    username: process.env.DB_USER || "dozy",
    password: process.env.DB_PASS || "sasa",
    database: process.env.DB_NAME || "database_development",
    host: process.env.DB_HOST || "localhost",
    dialect: "mssql",
    port: process.env.DB_PORT || 1433,
    dialectOptions: {
      options: { encrypt: false },
      trustServerCertificate: true,
    },
  },
  test: {
    username: process.env.DB_USER || "sa",
    password: process.env.DB_PASS || null,
    database: process.env.DB_NAME || "database_test",
    host: process.env.DB_HOST || "localhost",
    dialect: "mssql",
    port: process.env.DB_PORT || 1433,
  },
  production: {
    username: process.env.DB_USER || "sa",
    password: process.env.DB_PASS || null,
    database: process.env.DB_NAME || "database_production",
    host: process.env.DB_HOST || "localhost",
    dialect: "mssql",
    port: process.env.DB_PORT || 1433,
  },
};

export default config;
