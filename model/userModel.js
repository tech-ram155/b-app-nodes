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
  },
  role: {
    type: String,
    enum: ['admin', 'user'], // You can add more roles as needed
    default: 'user',
    //required: [true, 'Role is required']
  }
});

module.exports = mongoose.model('User', userSchema);
