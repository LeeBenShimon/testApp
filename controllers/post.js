const { get } = require("../routes/posts_routes");

const getAllPosts = (req, res) => {
    console.log('Posts get all service');
    res.send('Posts get all service');
};

const createPost = (req, res) => {
    console.log('Posts create service');
    res.send('Posts create service');
};

module.exports = {  getAllPosts, createPost };
