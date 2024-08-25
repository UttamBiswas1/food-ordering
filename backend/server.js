import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// import path from 'path';
 
// const __dirname=path.resolve();
//app config
const app=express()
const port=4000

//middleware

app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

// app.use(express.static(path.join(__dirname,"/frontend/dist")));
// app.get("*",(req,res)=>{
//   res.sendFile(path.join(__dirname,"frontend" ,"dist" ,"inde.html"))
// })

app.get('/',(req,res)=>{
  res.send("API is working");
})
app.listen(port,()=>{
  console.log(`server started on : http://localhost:${port}`);
})
//mongodb+srv://biswasuttam0911:<password>@cluster0.zb4xdlp.mongodb.net/?