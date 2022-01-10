const jwt = require('jsonwebtoken')
const config = require('../config')
const User = require('../model/user')

function notAuthorized(res){
    return res.status(401).send({errors: [{title: 'Not Authorized', detail: 'You need to login!'}]})
}

exports.authMiddleware = function(req, res, next) {
    const token = req.headers.authorization

    if(!token) {
        return notAuthorized(res)
    }

    //'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWQxOTQyYmNlNjIzMjBkOTIxZmRhOTQiLCJ1c2VybmFtZSI6ImxlZTUiLCJpYXQiOjE2NDExMzE1OTcsImV4cCI6MTY0MTEzNTE5N30.MwvozonItYxzplaqwnRtkZXMD7II7aJduFF91a_1ADw.MwvozonItYxzplaqwnRtkZXMD7II7aJduFF91a_1ADw'
    // use token.split and extract only token 
    // when send header authorization, key should include Bearer (it is a rule) 
    jwt.verify(token.split(' ')[1], config.SECRET, function(err, decodedToken) {
        // err
        if(err) {
            return res.status(401).send({errors: [{title: 'Not Authorized', detail: 'Invalid token'}]})
        }
        // decoded undefined

        User.findById(decodedToken.userId, function(err, foundUser) {
            if(err) {
                return res.status(401).send({errors: [{title: 'Not Authorized', detail: 'Invalid'}]})
            }

            if(!foundUser) {
                return res.status(401).send({errors: [{title: 'Not Authorized', detail: 'Not Found User'}]})
            }

            next()
        })
    })

}