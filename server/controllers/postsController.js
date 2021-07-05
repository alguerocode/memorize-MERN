const mongoose = require('mongoose')
const postMessage = require('../models/postMessage');


const get_posts = (req, res) => {
  postMessage.find()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(404).json(err.message);
    })
}

const create_post = (req, res) => {
  const post = req.body;
  const newPost = new postMessage(post)
  newPost.save()
    .then(() => {
      res.status(201).json(newPost);
    })
    .catch(err => {
      res.status(409).json({ message: err.message });
    })
}

const update_post = (req, res) => {
  const { id } = req.params;
  const post = req.body
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No post to update');
  }
  postMessage.findByIdAndUpdate(id, { ...post, id }, { new: true })
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(502).json({ message: err.message })
    })
}

const delete_post = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No post to update');
  }
  await postMessage.findByIdAndDelete(id)
  res.status(200).send('post deleted');
}

const like_post = async (req, res) => {
  const { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No post to update');
  }
  const post = await postMessage.findById(id);
  const updatedPost = await postMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
  res.status(200).json(updatedPost);
}

module.exports = {
  get_posts,
  create_post,
  update_post,
  delete_post,
  like_post
}
