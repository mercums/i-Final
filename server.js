/* eslint-disable no-console */
import express from 'express';
import apiRoutes from './routes/apiRoutes.js';
import db from './config/initializeDB.js';

const app = express();
const PORT = process.env.PORT || 3030;
const staticFolder = 'client';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));
app.use('/api', apiRoutes);

async function bootServer() {
  try {
    const mysql = await db.sequelizeDB;
    await mysql.sync({alter : true});
    app.listen(PORT, () => {
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();
