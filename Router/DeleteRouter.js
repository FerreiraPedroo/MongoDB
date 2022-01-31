const router = require('express').Router();
const DeleteController = require("../Controllers/DeleteController");

router.delete("/delete/user", DeleteController.deleteUser);

module.exports = router;

