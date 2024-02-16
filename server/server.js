const express = require('express');
const userRoutes  = require('./routes/userRoutes.js')
const {connectDatabase} = require('./connect');
const dotenv  = require('dotenv');
dotenv.config()
const app = express()
const PORT =  8000;
const URL = "mongodb://127.0.0.1:27017/mern-auth";


// Database connection
connectDatabase(URL)
.then(()=>{
    console.log("connected to MongoDB");
})
.catch((error)=>{
    console.log(error);
})

// plugin 
app.use(express.urlencoded({extended : false}));
app.use(express.json())

// userRoutes
// app.use('/', (req,res)=>{
//     res.send("hello from server")
// })
app.use('/api/users', userRoutes)


app.listen(PORT, ()=>{
    console.log(`server Running on http://localhost:${PORT}`);
})