const express = require('express')
const router = express.Router()
const User = require('../model/user')
const jwt = require('jsonwebtoken')
const config = require('../config')

router.post('/login', function(req, res) {
    const { email, password } = req.body 

    // const username = req.body.username
    // const email = req.body.email
    // const password = req.body.password
    // const confirmPassword = req.body.confirmPassword

    if(!email){
        // Invalid user
        return res.status(422).send({errors: [{title: 'email error', detail: 'please input email'}]})
    }
    if(!password){
        // Invalid user
        return res.status(422).send({errors: [{title: 'password error', detail: 'please input password'}]})
    }

    User.findOne({email}, function(err, foundUser) {
        if(err) {
            //Error Message
            return res.status(422).send({errors: [{title: 'login error', detail: 'Something went wrong'}]})
        }     
        if(!foundUser) {
            // Invalid user
            return res.status(422).send({errors: [{title: 'no existing user', detail: 'no existing user'}]})
        }

        if(!foundUser.hasSamePassword(password)) {
            return res.status(422).send({errors: [{title: 'password error', detail: 'Incorrect password'}]})
        }

        const token = jwt.sign({
            userId: foundUser.id,
            username: foundUser.username
        }, config.SECRET, { expiresIn: '1h' });

        
        return res.json(token)
        
    })

})

router.post('/register', function(req, res) {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    if(!username){
        // Invalid user
        return res.status(422).send({errors: [{title: 'username error', detail: 'please input uersname'}]})
    }
    if(!email){
        // Invalid user
        return res.status(422).send({errors: [{title: 'email error', detail: 'please input email'}]})
    }
    if(!password){
        // Invalid user
        return res.status(422).send({errors: [{title: 'password error', detail: 'please input password'}]})
    }
    if(password !== confirmPassword){
        // Invalid user
        return res.status(422).send({errors: [{title: 'password error', detail: 'mismatch password'}]})
    }

    User.findOne({email}, function(err, foundUser) {
        if(err) {
            //Error Message
            return res.status(422).send({errors: [{title: 'register error', detail: 'Something went wrong'}]})
        }     
        if(foundUser) {
            // Invalid user
            return res.status(422).send({errors: [{title: 'register error', detail: 'already user exists'}]})
        }
        const user = new User({username, email, password})
        user.save(function(err){
            if(err) {
                //Error Message
                return res.status(422).send({errors: [{title: 'register error', detail: 'Something went wrong'}]})
            }
            return res.json({"registered": true})
        })
        // return res.json(foundUser)
    })

    // return res.json({username: username, email: email, password: password})
})

module.exports = router