const router = require("express").Router();
const { login, logout, resetPassword, register } = require("../controllers/authController");

// POST /api/auth/login
router.post("/login", login);

// POST /api/auth/logout
router.post("/logout", logout);

// POST /api/auth/reset-password
router.post("/reset-password", resetPassword);

// POST /api/auth/register
router.post("/register", register);

module.exports = router;
