const express = require('express');
const econn = require("express-myconnection");
const mysql = require("mysql");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routers/routes");

const app = express();
const port = process.env.PORT || 3000

app.use(morgan("dev"));
app.use(econn(mysql,{
    host:"localhost",
    user:"root",
    password:"",
    database:"productos"
},"single"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use("/",routes);

app.use("/public",express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:false}));

app.listen(port,()=>{
    console.log("app funcionando en el puerto",port);
});