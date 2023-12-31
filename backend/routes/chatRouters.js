const express = require("express");
const {Protect} = require("../middleware/authMiddleware");
const { accessChat , fetchChats , createGroupChat , renameGroup , addToGroup , removeFromGroup } = require("../Controller/chatController");

const router = express.Router();

router.route("/").post(Protect , accessChat);
router.route("/").get(Protect , fetchChats);
router.route("/group").post(Protect , createGroupChat);
router.route("/rename").put(Protect , renameGroup);
router.route("/groupremove").put(Protect , removeFromGroup);
router.route("/groupadd").put(Protect , addToGroup);

module.exports = router ;