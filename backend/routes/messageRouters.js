const express = require("express")
const { Protect } = require("../middleware/authMiddleware");
const { SendMessage , allMessages } = require("../Controller/messageController")

const router = express.Router();

router.route('/').post(Protect, SendMessage);
router.route('/:chatId').get(Protect, allMessages);

module.exports = router;