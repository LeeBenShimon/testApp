const postModel = require("../models/posts_model");

const getAllPosts = async (req, res) => {
  const ownerFilter = req.query.owner;
  try{
    postModel.find();

  } catch {

  }
  res.send("get all posts:" + ownerFilter);
};

const getPostById = (req, res) => {
  const postId = req.params.id;
  res.send("get a post by id: " + postId);
};

const createPost = async (req, res) => {
  const post = req.body;
  try{
    const newPost = await postModel.create(post);
    res.status(201).send(newPost);
  }catch(error){
    res.status(400).send(error);
  }
};


function deletePost(req, res) {
  const postId = req.params.id;
  res.send("delete a post: " + postId);
}

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
  getPostById,
};