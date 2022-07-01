/* eslint-disable no-console */
import express from 'express';
import fetch from 'node-fetch';

import cereal from './cereal.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Cereal API!');
});

// Generic API inclusion demonstration
// Replace this with the group member's actual route
// This leads to /api/member1
router.use('/cereal', cereal);

export default router;
