const mongoose  = require("mongoose");

const connectDB = async()=>{
    console.log('process.env.MONGO_URI :>> ', process.env.MONGO_URI);
    try{
        const conn = mongoose.connect(`${process.env.MONGO_URI}` , {
            "useNewUrlParser" : true,
            "useUnifiedTopology" : true,
        });
        console.log(`MongoDB Connected  Succesfully Connected `)
    }catch(err){
        console.log(`ERROR: ${err.message}`);
        process.exit();
    }
}

module.exports = connectDB;