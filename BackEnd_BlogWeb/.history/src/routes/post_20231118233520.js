const express = require('express')
const router = express.Router()
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'public/uploads/' });
const postController = require('../app/controllers/PostController')

router.get('/getPost', postController.getPost)
router.post('/post', uploadMiddleware.single('file'), postController.post )

module.exports = router;