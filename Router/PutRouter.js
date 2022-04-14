const router = require('express').Router();
const putController = require("../Controllers/PutController");

router.put("/update/user", putController.updateUser);

module.exports = router;


