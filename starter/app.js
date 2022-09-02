

const tasks = require("./routes/tasks")
const NotFound = require("./middleware/NotFound")
const express = require("express")
const errorHandlerMiddleware = require('./middleware/error-handler');
const port =process.env.PORT ||80;
const app = express();
const connectDB = require("./db/connection");
require("dotenv").config();

app.use(express.json())
app.use(express.static('./public'));
app.use(NotFound);
app.use(errorHandlerMiddleware)

//routes
app.get("/hello",(req,res)=>{
    res.send("Task manager app")
})

app.use("/api/v1/tasks",tasks);

const start = async()=>{
    try {
       await connectDB(process.env.MONGO_URI);
        app.listen(port,(req,res)=>{
            console.log(`app is running on ${port}`)
        })
    } catch (error) {
       console.log(error); 
    }
}

start();