import express from 'express';
import {
    getPosts,
    createPost,
    updatePost
} from '../controllers/posts.js';
const router = express.Router();
router.get('/', getPosts);
router.post('/', createPost);
// UPDATING POSTS
// fetch ID of existing post
router.patch('/:id', updatePost)
export default router;