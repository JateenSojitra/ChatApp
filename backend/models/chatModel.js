// chatname
// users
// groupname
// Groupchat

const mongoose = require('mongoose')

// chat Modal
const chatModel = mongoose.Schema({
    chatName : {
        type : String ,
        trim : true
    },
    user : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    }],
    latestMessage :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Message"
    },
    groupAdmin : {
        type :mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps : true
}
);

const Chat = mongoose.model("Chat" , chatModel);
module.exports = Chat;
 