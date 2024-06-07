const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String,
    lowercase: true,
    required: [true, 'Username is required']
  },
  password: { 
    type: String, 
    required: [true, 'Password is required'],
    select: false // Prevent password from being selected by default
  }
});

module.exports = mongoose.model('User', userSchema);
