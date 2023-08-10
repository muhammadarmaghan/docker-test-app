const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users.controllers");

router.post("/login", UserController.loginUser);
router.post("/register", UserController.registerUser);
router.get("/:_id", UserController.getSingleUser);
router.get("/", UserController.getAll);

module.exports = router;
