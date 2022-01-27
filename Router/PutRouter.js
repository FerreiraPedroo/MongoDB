const router = require('express').Router();
const PutController = require("../Controllers/PutController");

router.put("/update/user", PutController.user)

module.exports = router;


