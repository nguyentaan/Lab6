const fs = require('fs');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const secret = '0935091070'

      class PostController {
          // [POST] /Post
          post(req, res) {

            console.log(req.files)
            res.json(req.files)
            
          }
          // [GET] /Post
          getPost(req, res) {
              
          }
}

module.exports = new PostController;
   