const express = require('express')
const app = express();
const mongoose = require('mongoose')






app.listen(3000, (err)=>{
    if(err)
    console.log(err)
    else
    console.log("Server is running")
})