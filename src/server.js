import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import {connectDB} from './db/index.js';



const app=express();

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8080, () =>{
console.log(`Server is running on PORT ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("mongodb connection failed", error);
})

















/*

import express from 'express';

const app=express();
( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on("error",(error)=>{
console.log("Error:", error);
throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on PORT ${process.env.PORT}`)
    })
    }
    catch(error){
console.error("error", error)
throw err
    }
})()
    
*/