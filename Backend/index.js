import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'
import morgan from 'morgan';
import { Login, Register } from './Routes/Auth.js';
import { addTask, deleteTask, getTask, updateTask } from './Routes/list.js';


const app = express();
app.use(express.json())
dotenv.config();
app.use(cors())
app.use(morgan("dev"))

app.get("/",(req, res)=>{
    res.send("Backend Working .......")
})

app.post("/register",Register)
app.post("/login",Login)
app.post("/add-task",addTask)
app.put("/update-task/:id",updateTask)
app.delete("/delete-task/:id",deleteTask)
app.get("/get-task/:id",getTask)




mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Connected to DB");
})

app.listen(9000,() => {
    console.log("listing on port 8000");
})