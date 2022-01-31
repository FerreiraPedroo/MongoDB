const router = require('express').Router();
const GetController = require("../Controllers/GetController");

router.get("/find/all", GetController.findAllUsers);
router.get("/find/name/:name", GetController.findUserByName);

module.exports = router;


