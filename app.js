const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

// Import routers
const blogRouter = require('./router/blogRouter');
const userRouter = require('./router/userRouter');

// Use routers
app.use('/api/v1/blogs', blogRouter);
app.use('/api/v1/users', userRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

module.exports = app;
