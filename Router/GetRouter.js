const router = require('express').Router();
const getController = require("../Controllers/GetController");

router.get("/find/all", getController.findAllUsers);
router.get("/find/name/:name", getController.findUserByName);

module.exports = router;


