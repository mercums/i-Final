import express from 'express';
import fetch from 'node-fetch';

import db from '../config/initializeDB.js';

const router = express.Router();

//
// This is a demo of how to structure your final project API
// One route file is expected per student, with appropriate HTTP methods on each endpoint
//

// /////////////////////////////////
// Food Inspection Set Demos
// /////////////////////////////////
router.route('/cereal') // actually localhost:3000/api/foodServicesPG
  .all((req, res, next) => {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(async (req, res) => {
    try {
      console.log('touched cereal endpoint');
      const cereal = await db.Cereal.findAll();
      const reply = Cereal.length > 0 ? { cereal } : { message: 'no results found' };
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

router.route('/cereal/:zipCode') // actually localhost:3000/api/foodServicesPG/20782
  .get(async (req, res) => {
    try {
      const url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
      const request = await fetch(url);
      const json = await request.json();
      console.log(json);

      const filteredList = json.filter((item, index) => {
        const {zipCode} = req.params;
        return item.zip === zipCode;
      });

      res.json({data: filteredList});
    } catch (error) {
      console.log(error);
      res.json({error: error});
    }
  })
  .put((req, res) => {
    try {
      res.json({message: 'put Cereal ID endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .post((req, res) => {
    try {
      res.json({message: 'post Cereal ID endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  })
  .delete((req, res) => {
    try {
      res.json({message: 'delete Cereal ID endpoint'});
    } catch (error) {
      console.log(error);
      res.json({error: 'Something went wrong on the server'});
    }
  });

export default router;