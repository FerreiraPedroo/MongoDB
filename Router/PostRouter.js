const router = require('express').Router();
const PostController = require("../Controllers/PostController");

router.post("/new/user", PostController.newUser);

module.exports = router;


