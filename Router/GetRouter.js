const router = require('express').Router();
const GetController = require("../Controllers/GetController");

router.get("/", GetController.home);

module.exports = router;


