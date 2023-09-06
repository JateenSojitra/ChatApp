const express = require("express")
const {registerUser ,  authUser , allUsers} = require("../Controller/registerUser");
const { Protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route('/').post(registerUser).get(Protect ,allUsers); // authectication routes for all users
router.post('/login' , authUser) // auth User

module.exports = router;