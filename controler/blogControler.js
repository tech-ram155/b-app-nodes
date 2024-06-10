const mongoose = require('mongoose');
const Blog = require('../model/blogModel');

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBlog = async (req, res) => {
  const blog = new Blog({
    ...req.body,
    featuredImage: req.file ? req.file.path : ''
  });
  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blogData = {
      ...req.body,
      ...(req.file && { featuredImage: req.file.path })
    };
    const blog = await Blog.findByIdAndUpdate(req.params.id, blogData, { new: true });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
