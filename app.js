
const express = require("express");
const app = express();
const ejs = require("ejs")
const user = require("./modules/user.module");
const users = require("./modules/user.module");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');
require("./config/passport.local");
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: "mongodb://localhost:27017/testsDB",
    collectionName: "sessions"
  })
}))


app.use(passport.initialize());
app.use(passport.session());




//HOME ROUTE
app.get("/", (req, res)=>{
    res.status(202).render("index");
});


//GET REGISTER ROUTE
app.get("/register", (req, res)=>{
    res.status(202).render("register");
});


//POST REGISTER ROUTE
app.post("/register", async(req, res)=>{
    try {
        const {username , password } = req.body;
        const user = await users.findOne({ username : req.body.username });
        if(user){
            res.status(404).send("User alrady exit.");
        }else{
            bcrypt.hash(req.body.password, saltRounds, async(err, hash)=> {
                // Store hash in your password DB.
                const saveuser = await new users({
                    username : req.body.username,
                    password: hash
                });
                const show = await saveuser.save();
                res.status(202).redirect("/login");
            }); 
        }
    } catch (error) {
        res.status(404).send(error.message);
    } 
});


//GET LOGIN ROUTE
app.get("/login", (req, res)=>{
    res.status(202).render("login");
});

//POST LOGIN ROUTE
// app.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login', successRedirect : "/profile" })
//   );


//GET PROFILE ROUTE
app.get("/profile", (req, res)=>{
    res.status(202).render("profile");
});

//GET LOGOUT ROUTE
app.get("/logout", (req, res)=>{
    res.status(202).render("logout");
});

module.exports = app
