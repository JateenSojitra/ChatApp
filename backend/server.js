const express = require("express");
const dotenv = require("dotenv");
const connectDB= require("./Config/db")

dotenv.config();
connectDB();
const app = express();

app.use('/api/user',userRoutes)
// const PORT = process.evn.PORT || 5000
// console.log('PORT :>> ', PORT);

app.listen(5000 , console.log(`Your Server was Running On Port no ${5000} `))