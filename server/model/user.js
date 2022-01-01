const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId;
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        max:[60,'max length'] 
    },
    email: { 
        type: String, 
        required: true, 
        lowercase: true, 
        unique: true, 
        max:[60,'max length'] 
    },
    password: { 
        type: String, 
        required: true, 
        min:[6,'min length'],
        max:[30,'max length'] 
    },
})

UserSchema.methods.hasSamePassword = function(inputPassword) {
    const user = this
    return bcrypt.compareSync(inputPassword, user.password)
}


UserSchema.pre('save', function(next) {
    const user = this 
    const saltRounds = 10           // hash's length

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.password = hash 
            next();

            // finish this process and then call database save() function
        });
    });
})

module.exports = mongoose.model('User', UserSchema)
