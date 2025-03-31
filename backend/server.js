import express from 'express';
import dotenv from 'dotenv';
import db from './models/index.js';
import configureMiddleware from './middlewares/index.js';
import routes from './routes/index.js';
import colors from 'colors';

const { bgCyan, bgGreen } = colors;

dotenv.config();

const app = express();

const initializeApp = async () => {
  try {
   
    await db.sequelize.sync();
    console.log('Conexión a la base de datos exitosa'.bgGreen.white);

    
    configureMiddleware(app);
    app.use('/api', routes);

    console.log(`Express app initialized successfully`.bgCyan.white);
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`.bgCyan.white);
    });
  } catch (error) {
    console.error('Error al configurar la aplicación:', error);
    process.exit(1);
  }
};

initializeApp();
