const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth')
const blogController = require('../controler/blogControler');
const upload = require('../middleware/upload'); 
router.route('/')
  .get(blogController.getAllBlogs)
  .post(upload.single('featuredImage'), blogController.createBlog);

router.route('/:id')
  .get(blogController.getBlogById)
  .patch(upload.single('featuredImage'), blogController.updateBlog)
  .delete(blogController.deleteBlog);

module.exports = router;
 
