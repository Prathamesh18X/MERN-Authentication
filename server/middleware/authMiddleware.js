const jwt = require('jsonwebtoken')
const User = require('../models/userModels.js')

const JWT_SECRET = "ahfjabsclbehif"

const protect = async(req,res, next) => {
    const token = req.cookies.jwt

    if(token){
        try {
            const decode = jwt.verify(token, JWT_SECRET);
            req.user = await User.findById(decode.userId).select('-password');
            next()
        } catch (error) {
            res.status(401).json({message : 'Invalid Token , Not Authorized'})
        }
    }else{
        res.status(401).json({message : 'No Token , Not Authorized'})
    }
}

module.exports = {protect}