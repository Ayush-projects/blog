const express = require('express')
const app = express();
const mongoose = require('mongoose')


let db_url = "mongodb://admin:admin@cluster0-shard-00-00.ngnbw.mongodb.net:27017,cluster0-shard-00-01.ngnbw.mongodb.net:27017,cluster0-shard-00-02.ngnbw.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-y66jbw-shard-0&authSource=admin&retryWrites=true&w=majority"



mongoose.connect(db_url).then((obj) => { console.log("Connecetd to database") }).catch((err) => {
    console.log(err)
})




app.set("view engine", "ejs");





app.get("/", (req, res) => {
    res.render("index.ejs");
})


app.get("/admin", function(req, res){
    res.render("admin.ejs");
})


app.listen(3000, (err) => {
    if (err)
        console.log(err)
    else
        console.log("Server is running")
})