const express = require('express');
const postsControllers = require('../controllers/postsController.js');
const postRouter = express.Router();

postRouter.get('/', postsControllers.get_posts);
postRouter.post('/', postsControllers.create_post);
postRouter.patch('/:id', postsControllers.update_post);
postRouter.delete('/:id', postsControllers.delete_post);
postRouter.patch('/like-post/:id', postsControllers.like_post);


module.exports = postRouter;


