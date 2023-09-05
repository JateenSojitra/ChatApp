const express = require("express")
const {registerUser ,  authUser , allUsers} = require("../Controller/registerUser");
const { Protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route('/').post(registerUser).get(Protect ,allUsers);
router.post('/login' , authUser)

module.exports = router;