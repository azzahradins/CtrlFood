const mongoose = require('mongoose');
const AuthSchema = mongoose.Schema({
    nama_user:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    umur:{
        type: Number,
        required: true
    },
    tinggi_badan:{
        type: Number,
        required: true
    },
    berat_badan:{
        type: Number,
        required: true
    },
    aktifitas_harian:{
        type: String,
        required: true
    },
    kalori_user:{
        type: String,
        required: true
    },
    kalori_makanan:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Auth', AuthSchema);