const express = require('express')
const path = require('path')
const cors = require('cors');
const morgan = require('morgan')

// const corsOption = {
//     origin: ['http://localhost:3000'],
// };
// app.use(cors(corsOption));
//if you want in every domain then

const v1=require('./routes/v1')

const app = express()
app.use(cors())

app.use(morgan("combined"))

app.use(express.json())
// app.use(express.static(path.join(__dirname,'..','public')))
// app.get('/',(req,res)=>{
//     return res.sendFile(path.join(__dirname,'..','public','index.html'))
// })

app.use('/v1', v1)
app.use('/',(req,res)=>{
    res.json("Hello")
})


module.exports = app;