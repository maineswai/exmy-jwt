const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  getUsersByUserId,
  getUsers,
  updateUsers,
  deleteUser,
  login
} = require("./user.controller");

router.post("/", checkToken, createUser);
router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUsersByUserId);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);
router.post("/login", login);

module.exports = router;
