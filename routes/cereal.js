import express from 'express';
import fetch from 'node-fetch';

import db from '../config/initializeDB.js';

const router = express.Router();

// /////////////////////////////////
// Cereal Routes
// /////////////////////////////////

router.route('/cereal/') // actually localhost:3030/api/cereal
  .all((req, res, next) => {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(async (req, res) => {
    try {
      console.log('touched cereal endpoint');
      const cereal = await db.Cereal.findAll();
      const reply = cereal.length > 0 ? { cereal } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.log('err');
      res.json({message: 'Server error'});
    }
  })
  .put(async(req, res) => {
    try {
      res.json({message: 'put Cereal endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .post(async(req, res) => {
    const cereal = await db.Cereal.findAll();
    const currentId = (await cereal.length) + 1;
    try {
      const newCereal = await db.Cereal.create({
        name: req.body.name,
        type: req.body.hotCold,
        calories: req.body.calories
      });
      res.json(newCereal);
    } catch (err) {
      console.error(err);
      res.json('Server error');
    }
  })
  .delete(async(req, res) => {
    try {
      res.json({message: 'delete Cereal endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

router.route('/cereal/:hotCold') // actually localhost:3000/api/foodServicesPG/h
  .get(async (req, res) => {
    try {
      const reviews = await db.Cereal.findAll({
        where: {
          type: req.params.hotCold
        }
      });

      res.json(cereal);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })

export default router;