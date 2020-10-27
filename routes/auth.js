const express = require('express');
const router = express.Router();
const { handleError, ErrorHandler } = require('../utils/ErrorHandler');
const Auth = require('../models/Login');

// post login
router.post('/login', login);

async function login(req, res, next){
    const { email, password } = req.body
    try{   
        if (!email || !password) {
            throw new ErrorHandler(400, 'Username dan password tidak boleh kosong')
        }
        const user = await Auth.findOne({email: (email), password: (password)});
        if (!user) {
            throw new ErrorHandler(400, 'Gagal login, akun tidak ditemukan');
        }else{
            console.log('here it is');
        }
        next();
    } catch(err){
        next(err);
    }
}

router.post('/register', async (req, res) => {
    const auth = new Auth({
        email: req.body.email,
        password: req.body.password
    });
    try{
        const authRegister = await auth.save();
        res.json(authRegister);
    }catch(err){   
        console.log(err);
        res.json(new ErrorHandler(400, 'User with the specified email does not exists'));
    }
});

module.exports = router;