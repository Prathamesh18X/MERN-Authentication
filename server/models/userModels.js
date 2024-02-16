const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    userName : {type:String , required : true},
    email : {type : String , required : true , unique : true},
    password : {type : String , required : true },
    //cpassword : {type : String , required : true },
},{
    timestamps:true
});
    //this is a middleware with hook pre(save) we want to run a function
    // note : remember this function can't be a arrow function
    userSchema.pre('save', async function(next){

        if(!this.isModified('password')){
            next();
        }

        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt)
    })

    userSchema.methods.matchPassword = async function(enteredPassword){
        return await bcrypt.compare(enteredPassword,this.password)
    }
const User = mongoose.model('User',userSchema);
module.exports = User