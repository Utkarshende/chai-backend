import express from 'express';
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
.catch(()=>{
    console.log("mongodb connection failed", error);
})
