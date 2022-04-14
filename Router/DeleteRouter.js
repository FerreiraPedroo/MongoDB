const router = require('express').Router();
const deleteController = require("../Controllers/DeleteController");

router.delete("/delete/user", deleteController.deleteUser);

module.exports = router;

