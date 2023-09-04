const express = require("express");
const dotenv = require("dotenv");
// const bodyparser = require("body-parser");
const connectDB= require("./Config/db")
const userRoutes = require("./routes/userRouter")
const {erorrHandler , notFound } = require("./middleware/erorrMiddleware")

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // for accept the json Data
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({
//     extended : true
// }));
app.use('/api/user',userRoutes)

app.use(notFound)
app.use(erorrHandler)

app.listen(5000 , console.log(`Your Server was Running On Port no ${5000} `))