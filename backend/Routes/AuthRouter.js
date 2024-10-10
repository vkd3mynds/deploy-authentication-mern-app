const { signUp, login } = require("../Controllers/AuthController");
const { signUpValidation, loginValidation } = require("../Middleware/AuthValidation");

const router = require("express").Router();

// router.post("/login", (req, res) => {
//   res.send("login success");
// });

// router.post("/signup", (req, res) => {
//   res.send("signup success");
// });
router.post("/login", loginValidation, login);
router.post("/signup", signUpValidation, signUp);

module.exports = router;
