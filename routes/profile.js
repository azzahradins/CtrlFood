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
  // const { email } = req.body;
  // var dataCalories = {
  //   nama_makanan: req.body.nama_makanan,
  //   kalori_makanan: req.body.kalori_makanan,
  //   link: req.body.link,
  // };
  const {email} = req.body;
  var dataCalories = {
    tanggal : Date.now(),
    nama_makanan: req.body.nama_makanan,
    kalori_makanan: req.body.kalori_makanan,
    link: req.body.link
  };
  try {
    if (!email) {
      throw new ErrorHandler(400, 'Search invalid, email tidak boleh kosong');
    }
    const user = await Profile.findOneAndUpdate(
      {email : (email)},
      {$push:{kalori_makanan: dataCalories}}
    );
    if (!user) {
      throw new ErrorHandler(400, 'User tidak ditemukan');
    } else {
      throw new ErrorHandler(200, 'Berhasil menambah data!');
    }
    next();
  } catch (err) {
    next(err);
  }
}

router.get('/', infoProfile);

router.post('/add_calories', addCalories);
module.exports = router;