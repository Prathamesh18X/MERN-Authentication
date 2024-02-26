const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generateToken = (res , userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{expiresIn : '1d'});

    res.cookie('jwt' , token , {
        httpOnly : true,
        sameSite : 'strict',
        maxAge : 24 * 60 * 60 * 1000
    })
}

module.exports = generateToken