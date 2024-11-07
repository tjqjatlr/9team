// Worker_Profile.js
const mongoose = require('mongoose');

const workerProfileSchema = new mongoose.Schema({
    worker_id: { type: Number, required: true, unique: true },
    user_id: { type: String, required: true },
    nick_name: { type: String },
    first_name: { type: String },
    last_name: { type: String }
});

module.exports = mongoose.model('Worker_Profile', workerProfileSchema);