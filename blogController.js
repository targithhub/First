const Blog = require("../../Models/Blog");
const LikeBlog = require("../../Models/LikeBlog");
const CommentBlog = require("../../Models/CommentBlog");
const Category = require("../../Models/Category");

const getBlogsFromDB = async (req, res) => {
  try {
    const blogs = await Blog.findOne().populate("category");
    console.log("blogs", blogs);
    return res.json({ data: blogs });
  } catch (err) {
    return res.json({ error: String(err) });
  }
};

// Create the Blog
const addBlog = (req, res) => {
  console.log(req.body);
  const blogObj = new Blog(req.body);
  blogObj
    .save()
    .then((Blog) => {
      return res.json({
        message: "Blog Created Successfully.",
        data: Blog,
      });
    })
    .catch((err) => {
      return res.json({
        error: err.message,
      });
    });
};

// update Blog
const updateBlog = async (req, res) => {
  try {
    const BlogId = req.params.BlogId;
    const updatedData = req.body;

    const Blog = await Blog.findByIdAndUpdate(BlogId, updatedData, {
      new: true,
    }); // null when there is no Blog
    if (!Blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    return res.json({ data: Blog, msg: "Blog updated successfully." });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//delete Blog
const deleteBlog = async (req, res) => {
  try {
    const BlogId = req.params.BlogId;
    const Blog = await Blog.findByIdAndDelete(BlogId);
    console.log("Blog");
    if (!Blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    return res.json({ msg: "Blog deleted successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "not able to delete the Blog" });
  }
};

//like Blog
const likeTheBlog = async (req, res) => {
  try {
    const requestData = req.body;
    const likeEntry = await LikeBlog.findOne(requestData);
    console.log("likeEntry", likeEntry);
    if (likeEntry) {
      await LikeBlog.findByIdAndDelete(likeEnrty._id);
      return res.status(200).json({ data: { isLike: false } });
    } else {
      const likeblog = new LikeBlog(requestData);
      await likeblog.save();
      return res.status(200).json({ data: { isLike: true } });
    }
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

//comment Blog
const commentTheBlog = async (req, res) => {
  try {
    const requestData = req.body;
    const commentblog = new CommentBlog(requestData);
    await commentblog.save();
    return res.status(200).json({ data: commentblog });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

// getSingleBlog
const getSingleBlog = async (req, res) => {
  console.log(req.params);
  const blogId = req.params.blogId;
  console.log(blogId);
  try {
    const blogDetails = await Blog.findOne({ _id: blogId });
    console.log(blogId);
    console.log(blogDetails);
    return res.json({ data: blogDetails });
  } catch (err) {
    return res.json({
      data: null,
      error: err,
      message: `Blog is not present with this id ${blogId}`,
    });
  }
};

//GetBlogByCategory
const getBlogByCategory = async (req, res) => {
  try {
    const blogDetails = await Blog.find().populate("category");

    console.log(blogDetails);
    return res.json({ data: blogDetails });
  } catch (err) {
    return res.json({
      data: null,
      error: String(err),
    });
  }
};

//GetAllCategories
const getAllCategory = async (req, res) => {
  const category = req.params.name;
  console.log(category);
  try {
    const categoryDetails = await Category.find({ category });
    console.log(category);
    console.log(categoryDetails);
    return res.json({ data: categoryDetails });
  } catch (err) {
    return res.json({
      data: null,
      error: err,
      message: `Data is not found`,
    });
  }
};

module.exports = {
  addBlog,
  getBlogsFromDB,
  updateBlog,
  deleteBlog,
  getSingleBlog,
  likeTheBlog,
  getBlogByCategory,
  commentTheBlog,
  getAllCategory,
};
