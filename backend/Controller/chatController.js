const asyncHandler = require('express-async-handler');
const Chat = require("../models/chatModel");
const User = require("../models/userModel");

const accessChat = asyncHandler(async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        console.log("User ID Param not sent witj request");
        return res.sendStatus(400);

    }
    var isChat = await Chat.find({
        isGroupChat: false,
        $and: [
            { users: { $elemMatch: { $eq: req.user._id } } },
            { users: { $elemMatch: { $eq: userId } } }
        ]
    }).populate("users", "-password").populate("latestMessage");

    isChat = await User.populate(isChat, {
        path: "latestMessage.sender",
        select: "name pic email",
    });
    // if chat  exist
    if (isChat.lenght > 0) {
        res.send(isChat[0]) //send chat 
    }
    else { //otherwise we create new chat
        var chatData = {
            chatName: "sender",
            isGroupChat: false,
            users: [req.user._id, userId],
        };

        try {
            // chat is Cretaed
            const createdChat = await Chat.create(chatData);

            const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
                "users",
                "-password"
            );

            res.status(200).send(fullChat);

        } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }


})

module.exports = { accessChat };