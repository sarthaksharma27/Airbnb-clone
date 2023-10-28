const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");

const usercontroller = require("../controllers/user")

// Signup
router.route("/signup")
.get(usercontroller.renderSignupForm)
.post(wrapAsync (usercontroller.signup))

// Login 
router.route("/login")
.get(usercontroller.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), usercontroller.login);

// Logout
router.get('/logout', usercontroller.logout);

module.exports = router;