const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function authenticateToken(req, res, next) {
  const authHeader = req.header('Authorization');
  if (!authHeader) return res.status(401).json({ message: 'Access denied' });

  const token = authHeader.split(' ')[1]; // Extract token after 'Bearer '
  if (!token) return res.status(401).json({ message: 'Access denied' });
  
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    //console.log(verified);
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
}

module.exports = authenticateToken;
