const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message_id: { type: Number, required: true, unique: true },
    sender_id: { type: String, required: true }, // Foreign key referencing User_Login
    receiver_id: { type: String, required: true }, // Foreign key referencing User_Login
    content: { type: String, required: true },
    sent_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Messages', messageSchema);
