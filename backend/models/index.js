import { Sequelize } from 'sequelize';
import process from 'process';
import configData from '../config/config.js';
import PersonModel from './person.js';
import StarshipModel from './starship.js';

const env = process.env.NODE_ENV || 'development';
const config = configData[env];

const db = {};

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

// Registrar modelos manualmente
db.Person = PersonModel(sequelize);
db.Starship = StarshipModel(sequelize);

// Configurar asociaciones
Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
