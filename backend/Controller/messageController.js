const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");
const Message = require("../models/messageModel");

// send Particular messgae API
const SendMessage = asyncHandler(async (req, res) => {
    const { content, chatId } = req.body;
    if (!content || !chatId) {
        console.log("Invalid data passed into request");
        return res.sendStatus(400);
    }
    var newMessages = {
        sender: req.user._id,
        content: content,
        chat: chatId
    }
    try {
        var message = await Message.create(newMessages);

        message = await message.populate("sender", "name pic");
        message = await message.populate("chat");
        message = await User.populate(message, {
            path: "chat.users",
            select: "name pic email,"
        });

        await Chat.findByIdAndUpdate(req.body.chatId, {
            latestMessage: message
        });

        res.json(message);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

// fetching all the messages API
const allMessages = asyncHandler(async (req, res) => {
    try {
        const message = await Message.find({ chat: req.params.chatId }).populate(
            "sender",
            "name pic email"
        ).populate("chat");

        res.json(message);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
})

module.exports = { SendMessage, allMessages }