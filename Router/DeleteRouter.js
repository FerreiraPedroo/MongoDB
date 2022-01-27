const router = require('express').Router();
const DeleteController = require("../Controllers/DeleteController");

router.delete("/delete/user", DeleteController.user);

module.exports = router;

