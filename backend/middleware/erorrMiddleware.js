const notFound = (req, res , next)=>{
    const error = new Error(`Not Found -${req.originalUrl}`);
    res.status(404);
    next(error);
}

// error Handling Middler Ware
const erorrHandler = (err , req , res , next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message:err.message,
        stack : process.env.NODE_ENV === "producation" ? null : err.stack,
    });
};
module.exports = {notFound , erorrHandler};