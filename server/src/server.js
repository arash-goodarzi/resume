
const app = require('./app')

const http = require('http')

require("dotenv").config();

const PORT = process.env.PORT || 8030;

const server = http.createServer(app);




async function startServer(){


    server.listen(PORT,(req,res)=>{
        console.log(`Server is running on port ${PORT} ...!`)
    })
    
}

startServer ()