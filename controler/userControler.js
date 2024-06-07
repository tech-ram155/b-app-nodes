const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username and explicitly select the password field
    const user = await User.findOne({ username }).select('+password');
    if (!user) {
      // If user is not found, return a 404 status with an informative message
      return res.status(404).json({ message: 'User not found' });
    }

    // Example: Check password directly
    if (user.password !== password) {
      // If password is invalid, return a 401 status with an informative message
      return res.status(401).json({ message: 'Invalid password' });
    }

    // If username and password are valid, generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Remove the password field from the user object before sending the response
    const userResponse = user.toObject();
    delete userResponse.password;

    // Send the token in the response with a 200 status
    res.status(200).json({ token, user: userResponse });
  } catch (err) {
    // If any unexpected error occurs, return a 500 status with an error message
    res.status(500).json({ message: 'Internal server error' });
  }
};
