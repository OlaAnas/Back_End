const express = require('express');
const router = express.Router();
const controller = require('../controller/control');

router.get('/', controller.goHomePage);
router.post('/create-article',controller.createPost);
router.post('/delete-user/:id', controller.deleteUser);


//route articles
router.get('/fullArticle/:id',controller.getArticle);

//route editing
router.get('/edit/:id', controller.editArticle);
router.post('/update-post/:id', controller.updatePost)

module.exports = router;