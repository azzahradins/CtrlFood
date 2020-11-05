const mongoose = require('mongoose');

const AuthSchema = mongoose.Schema({
    nama_user:{
        type: String
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    umur:{
        type: Number
    },
    tinggi_badan:{
        type: Number
    },
    berat_badan:{
        type: Number
    },
    aktifitas_harian:{
        type: String
    },
    kalori_user:{
        type: Number
    },
    kalori_makanan:{
        type: Number
    }
});

module.exports = mongoose.model('Profile', AuthSchema);