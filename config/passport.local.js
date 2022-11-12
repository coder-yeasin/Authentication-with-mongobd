// const passport = require("passport")
// const LocalStrategy = require("passport-local").Strategy;
// const User = require("../modules/user.module");
// const bcrypt = require("bcrypt")

// passport.use(new LocalStrategy( async (username, password, done) => {

//     try {
//         const User = await User.findOne({ username: username });
//         if (!User) { 
//             return done(null, false, {message: "Incorrect user"});
//         }
//         if(!bcrypt.compare(password, User.password)){
//             return done(null, false, {message: "Incorrect Password"});
//         }
//         return done(null, user);
//     } catch (error) {
//         return done(err);
//     } 
//     }
//   ));


//   passport.serializeUser((user, done)=> {
//         done(null, User.id);
//   });
  
//   passport.deserializeUser(async(id, done) => {
//     try {
//         const User = await User.findById(id);
//         done(null, User)
//     } catch (error) {
//        done(error, false);
//     }
//   });