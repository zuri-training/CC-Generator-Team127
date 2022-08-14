const express = require('express');
const blogController = require('../controllers/commentController');

const router = express.Router();

// router.get('/downloadpage', blogController.comment_create_get);
router.get('/', blogController.index);
// router.post('/downloadpage', blogController.comment_index);
router.get('/commentpage', blogController.comment_index);
router.post('/download1', blogController.comment_create_post);
router.post('/download2', blogController.comment_create_post);
router.post('/download3', blogController.comment_create_post);
router.post('/download4', blogController.comment_create_post);
router.post('/download5', blogController.comment_create_post);
router.post('/download6', blogController.comment_create_post);
router.post('/download7', blogController.comment_create_post);
router.post('/download8', blogController.comment_create_post);
// router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.comment_delete);

module.exports = router;
