// User_Login.js
const mongoose = require('mongoose');

const userLoginSchema = new mongoose.Schema({
    user_id: { type: Number, required: true, unique: true },
    id: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive', 'banned'], required: true },
    is_boss: { type: Boolean, default: false },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User_Login', userLoginSchema);
