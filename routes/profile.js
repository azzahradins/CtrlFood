const express = require('express');

const router = express.Router();
const { ErrorHandler } = require('../utils/ErrorHandler');
const Profile = require('../models/Profile');

async function infoProfile(req, res, next) {
  const { email } = req.body;
  try {
    if (!email) {
      throw new ErrorHandler(400, 'Search invalid, email tidak boleh kosong');
    }
    const user = await Profile.findOne({email : (email)});
    if (!user) {
      throw new ErrorHandler(400, 'User tidak ditemukan');
    } else {
      res.json(user);
      res.status(200).send();
    }
    next();
  } catch (err) {
    next(err);
  }
}

async function addCalories(req, res, next) {
  const { email, calories } = req.body;
  try {
    if (!email) {
      throw new ErrorHandler(400, 'Search invalid, email tidak boleh kosong');
    }
    const user = await Profile.findOne({email : (email), calories});
    if (!user) {
      throw new ErrorHandler(400, 'User tidak ditemukan');
    } else {
      res.json(user);
      res.status(200).send();
    }
    next();
  } catch (err) {
    next(err);
  }
}

router.get('/', infoProfile);

router.post('/add_calories', addCalories);
module.exports = router;