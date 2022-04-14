const router = require('express').Router();
const postController = require("../Controllers/PostController");

router.post("/new/user", postController.newUser);

module.exports = router;


