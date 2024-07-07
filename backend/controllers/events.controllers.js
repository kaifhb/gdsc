const Blog = require("../models/blog.js")
async function getAllBlogs (req, res) {
  try {
    const blogs = await Blog.find({});
    // console.log("sjhdhjds");
    res.json(blogs);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {getAllBlogs}
