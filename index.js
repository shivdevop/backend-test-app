// script mei we can write commands that we can run 
const express=require('express');
const app=express();

require('dotenv').config();
const port=process.env.port || 3000
app.get('/',(req,res)=>{
    res.send('Hello World');
    res.send('<h1>Hello World</h1>');
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
