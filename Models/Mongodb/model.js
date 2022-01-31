const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  isActive: { type: Boolean, default: true, required: false },
  name: { type: String, required: true },
  img: { type: String, required: false },
  email: { type: String, required: true },
  about: { type: String, required: false },
  theme: { type: String, required: false },
}, { bufferCommands: false, autoCreate: false });

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;