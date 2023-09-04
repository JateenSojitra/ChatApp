const mongoose  = require("mongoose");

const connectDB = async()=>{
// let url = "mongodb+srv://jatinsojitra21:Jatin@2021@jetcluster2021.fbuzchj.mongodb.net/?retryWrites=true&w=majority"

    console.log('URI :>> ', process.env.MONGO_URI);
    try{
        // const conn = mongoose.connect(`${process.env.MONGO_URI}` , {
        const conn = mongoose.connect("mongodb://localhost:27017/Chat" , {
            "useNewUrlParser": true,
            "useUnifiedTopology": true,
        });
        console.log(`MongoDB Connected  Succesfully Connected`)
    }catch(err){
        console.log(`ERROR: ${err.message}`);
        process.exit();
    }
}

module.exports = connectDB;