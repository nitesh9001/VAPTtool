const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const async = require("async");
const jwt = require("jsonwebtoken");
const keys = require("../../config/key");
const validateRegisterInput = require("../../validation/Register");
const validateLoginInput = require("../../validation/Login");
const crypto = require("crypto");
var nodemailer = require('nodemailer');
const User=require("../../models/User");













//login routes post 
router.post("/login", (req, res) => {
const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
   const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ errorfound: " Invalid email or password" });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ errorfound: "Invalid email or password " });
      }
    });
  });
});


















//registartion routes post method

router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email}).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          lastName: req.body.lastName,
          phoneNumber: req.body.phoneNumber,
          CompanyName: req.body.CompanyName,
          yourPostion: req.body.yourPostion,
          country: req.body.country,
          city: req.body.city,
          pincode: req.body.pincode,
          password: req.body.password,

          // userrole: req.body.userrole
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });























  // forget
router.post('/forgetPassword', function(req, res, next) {
    async.waterfall([
      function(done) {
        crypto.randomBytes(20, function(err, buf) {
          var token = buf.toString('hex');
          done(err, token);
        });
      },
      function(token, done) {
        User.findOne({ email: req.body.email }, function(err, user) {
          if (!user) {       
            console.log('wrong')
            return  res.status(400).json({'errors':'No user found'});
          }
          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() ; // 1 hour  
          user.save(function(err) {
            done(err, token, user);
          });
        });
      },
      function(token, user, done) {
        var smtpTransport = nodemailer.createTransport({
          service: 'Gmail', 
          anpmuth: {
            user: 'singhnitesh9001@gmail.com',
            pass: `${process.env.EMAIL_PASSWORD}`
          }
        });
        var mailOptions = {
          to: user.email,
          from: 'singhnitesh9001@gmail.com',
          subject: 'Reset Password',
          text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            'http://localhost:3000/reset/' + token + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
        };
        smtpTransport.sendMail(mailOptions, function(err) {
          console.log('mail sent');
           req.send('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
          done(err, 'done');
        });
      }
    ], function(err) {
      if (err) {return next(err);}
    });
});
  










router.get('/reset_token', function(req,res){
  User.findOne({resetPasswordToken:req.body.resetPasswordToken}) 
  .then((user) => {
    if (user == null) {
      console.error('password reset link is invalid or has expired');
       return res.status(403).json({'errors':'password reset link is invalid or has expired'});
    } else {
      console.log(user.email)
      return res.status(200).json({'message': 'password reset link a-ok'});
    }
  })
})






router.post('/reset/' , function(req,res){
  User.findOne({ resetPasswordToken :req.body.resetPasswordToken }).then(user => {    
      if (user == null) {
        console.error('password reset link is invalid or has expired');
        res.status(403).send('password reset link is invalid or has expired');
      } else if (user != null) {
        console.log('user exists in db');
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
            user
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
            user
            .updateOne({
            password:hash,
            resetPasswordToken:null,
            resetPasswordExpires:null
            })
          .then(() => {
            console.log(`password updated ${user.password}`);
            res.status(200).send({ message: 'password updated' });
          });
        });
      });
      } 
      else {
        console.error('no user exists in db to update');
        res.status(401).json('no user exists in db to update');
      }
  
  })
})

module.exports = router; 