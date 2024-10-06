import express from "express";

const app = express()

app.get("/", (req,res)=>{
    res.send("Welcome to App")
})


app.listen(3000,()=>{
    console.log("App running on port 3000 ")
})