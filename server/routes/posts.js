import express from 'express';
import { deletePost } from '../../client/src/api/index.js';
import {
    getPosts,
    createPost,
    updatePost,
    deletePost
} from '../controllers/posts.js';
const router = express.Router();
router.get('/', getPosts);
router.post('/', createPost);
// UPDATING POSTS
// fetch ID of existing post
router.patch('/:id', updatePost)

// DELETING POSTS
router.delete('/:id', deletePost)

export default router;