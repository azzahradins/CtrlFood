const express = require('express');

const router = express.Router();
const { ErrorHandler } = require('../utils/ErrorHandler');
const Auth = require('../models/Profile');

async function login(req, res, next) {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new ErrorHandler(400, 'Username dan password tidak boleh kosong');
    }
    const user = await Auth.findOne({ email : (email), password : (password) });
    if (!user) {
      throw new ErrorHandler(400, 'Gagal login, akun tidak ditemukan');
    } else {
      res.json(user);
      res.status(200).send();
    }
    next();
  } catch (err) {
    next(err);
  }
}

async function register(req, res, next){
  const register = new Auth({
    nama_lengkap : req.body.nama_lengkap,
    email : req.body.email,
    password : req.body.password,
    umur : req.body.umur,
    tinggi_badan : req.body.tinggi_badan,
    berat_badan : req.body.berat_badan,
    aktivitas_harian : req.body.aktivitas_harian,
    kalori_user : req.body.kalori_user,
    kalori_makanan : req.body.kalori_makanan
  });
  try {
    const authRegister = await register.save();
    res.json(authRegister);
    res.status(200).send();
    next();
  } catch (err) {
    if(err.name === 'MongoError' && err.code === 11000){
      res.status(400).send(new ErrorHandler(400, 'Email sudah digunakan'));
    }else{
      next(err);
    }
  }
}

// post login
router.post('/login', login);

router.post('/register', register);

module.exports = router;
