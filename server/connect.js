const mongoose = require('mongoose')

const connectDatabase = async(URL) =>{
    return await mongoose.connect(URL)
}
module.exports = {connectDatabase}