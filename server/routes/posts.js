import express from 'express';
//import { likePost } from '../../client/src/api/index.js';

import {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost
    
} from '../controllers/posts.js';
const router = express.Router();
router.get('/', getPosts);
router.post('/', createPost);
// UPDATING POSTS
// fetch ID of existing post
router.patch('/:id', updatePost)

// DELETING POSTS
router.delete('/:id', deletePost)

// LIKE posts
router.patch('/:id/likePost',likePost)

export default router;