const mongoose = require('mongoose');

const model = {
  user: () => {
    const userSchema = new mongoose.Schema({
      isActive: { type: Boolean, default: true, require: false },
      name: { type: String, require: true },
      age: { type: Number, require: true },
      img: { type: String, require: false },
      email: { type: String, require: true },
      country: { type: String, require: false },
      address: { type: String, require: false },
      about: { type: String, require: false },
      theme: { type: String, require: false },
      comments: [{ name: { type: String, require: false }, comment: { type: String, require: false } }],
    }, { bufferCommands: false });

    return mongoose.model("Users", userSchema);
  }
};

module.exports = model;