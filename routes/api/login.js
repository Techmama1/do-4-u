const router = require("express").Router();
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
  

// Matches with /api/login
router.route("/")
    .post((req, res) => {
        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if(!user){
                return res.status(401).send({success: false});
            } else {
                user.comparePassword(req.body.password, (err, isMatch) => {
                    if(err || !isMatch){
                        return res.status(401).send({success: false});
                    } else {
                        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                        return res.status(200).send({success: true, token: token, sub: user._id});
                    }
                });
            }
        });
    });

    module.exports = router;