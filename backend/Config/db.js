const mongoose = require("mongoose");

// database connectivity
const connectDB = async () => {

    console.log('URI :>> ', process.env.MONGO_URI);
    try {
        const conn = mongoose.connect("mongodb://localhost:27017/Chat", {
            "useNewUrlParser": true,
            "useUnifiedTopology": true,
        });
        console.log(`MongoDB Connected  Succesfully Connected`)
    } catch (err) {
        console.log(`ERROR: ${err.message}`);
        process.exit();
    }
}

module.exports = connectDB;