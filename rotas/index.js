const express = require("express")
const mongoose = require("mongoose");
const app = express()
const path = require("path")
const hbs = require("hbs")
const logIn = require("./mongodba")
const bodyParser = require('body-parser')
const passport = require("passport");
const passportLocalMongoose  = require("passport-local-mongoose");

const templatePath=path.join(__dirname,"../template")
const publicPath = path.join(__dirname, '../public')

app.use(express.json())
app.set("view engine","hbs")
app.set("views", templatePath)
app.use(express.urlencoded({extended:false}))
app.use(express.static(publicPath))

app.get("/login",(req,res)=>{
    res.render("login");
 })
app.get("/signup",async (req,res)=>{

    //const busca = await logIn.find({});

  //res.status(200).json(busca);
  res.render("signup");
})

app.post("/signup",async (req,res)=>{
    const data = {
        name: req.body.name,
        password: req.body.password
    }
    const login = new logIn(data);
    const ss = await login.save();
    resultado = ss;
    //await collection.insertMany([data]);

    res.render("login");
    
})
app.post("/login",async (req,res)=>{
    const data = {
        name: req.body.name,
        password: req.body.password
    }
    const login = new logIn(data);
    const ss = await login.save();
    resultado = ss;
    //await collection.insertMany([data]);

    res.render("home");
    
})

app.get("/novasenha",(req,res)=>{
    res.render("novasenha");
 })

 app.post("/novasenha",async (req,res)=>{
    const data = {
        name: req.body.name,
        password: req.body.password
    }
    //await collection.insertMany([data]);

    res.render("login");
    
})





app.listen(8080, () => {
    console.log('port connected')
})