const router = require('express').Router();
const PostController = require("../Controllers/PostController");

router.post("/new/user", PostController.user);

module.exports = router;


