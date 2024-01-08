const express = require('express')
const router = express.Router()
const postController = require('../app/controllers/PostController')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
      console.log(file)
    },
    
    filename: function (req, file, cb) {
      cb(null, file.fieldname + Date.now())
      console.log(file)
    }
  })
const upload = multer({ storage: storage })

router.post('/' ,postController.post )
router.get('/' ,postController.getPost)
router.get('/:id', postController.getPostById)
router.get('/category/:category', postController.getCategories)
router.get('/category/getALl', postController.getAllCategories)
router.get('/getPostByCategories/:categories', postController.getPostByCategories)
router.put('/update/:id', postController.updatePost)
router.delete('/deletePost/:id', postController.deletePost)
module.exports = router;




