/**
 * # Auth API
 * @description This is the API passport authentication
 * @author Michael McVeigh
 */

//REQUIRE MODULES
const passport = require('passport');

//REQUIRE FILES
const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.post('/login', (req, res, next) => {
  passport.authenticate('local-login', (err, user, info) => {
    if (user) {
      console.log("validated: ", user);
      return res.json(user)
    }
    else {return res.status(401).json({message: info})}
    // res.json({message: 'success'})
  })(req, res, next);
});


router.post('/signup', (req, res, next) => {
  passport.authenticate('local-signup', (err, user, info) => {
    console.log(user)

  })(req, res, next);
});

router.post('/googleAuth', (req, res, next) => {
  console.log("authorizing google")
  passport.authenticate('google', {
     scope:["https://www.googleapis.com/auth/plus.login",
     "https://www.googleapis.com/auth/plus.profile.emails.read"
    ]
  })(req,res,next);
});

router.get('/auth/google/callback', (req, res, next) => {
  console.log("callback initiated");
  passport.authenticate('google', {
    failureRedirect: "/#/login",
    successRedirect: "/"
  })(req, res, next)
})

const googleReturn = (req, res, next) => {

};

const logout = (req, res, next) => {
  console.log('LOGGING OUT!');
  req.logout();
  res.redirect('/');
};

module.exports = router;
