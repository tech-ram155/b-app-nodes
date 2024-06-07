const mongoose = require('mongoose');


const BlogSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Title is required.'] },
    author: { type: String, required: [true, 'Author is required.'] },
    content: { type: String, required: [true, 'Content is required.'] },
    summary: { type: String, default: '' },
    tags: { type: String, default: '' },
    category: { type: String, required: [true, 'Category is required.'] },
    publicationDate: { type: Date },
    status: { type: String, required: [true, 'Status is required.'] },
    featuredImage: { type: String, default: '' },
    slug: { type: String, required: [true, 'Slug is required.'] },
    metaTitle: { type: String, default: '' },
    metaDescription: { type: String, default: '' },
    commentsEnabled: { type: Boolean, default: true },
    viewCount: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    seoKeywords: { type: String, default: '' }
  });
  
module.exports = mongoose.model('Blog', BlogSchema);
