const express = require("express");
const dotenv = require("dotenv");
// const bodyparser = require("body-parser");
const connectDB= require("./Config/db")
const userRoutes = require("./routes/userRouter")
const chatRouters = require("./routes/chatRouters")
const {erorrHandler , notFound } = require("./middleware/erorrMiddleware")

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // for accept the json Data

app.use('/api/user',userRoutes) // User Routes Add
app.use('/api/user',chatRouters) // char Routes Add

app.use(notFound)
app.use(erorrHandler)

app.listen(5000 , console.log(`Your Server was Running On Port no ${5000} `))