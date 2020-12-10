require('dotenv').config()
const express= require('express')


const server = express()

server.use(express.json())

server.get('/',(req,res)=>{
    const myWords = process.env.FUN_FACT || "You can make it to the end"
    res.status(200).json({message: myWords})
})
 
const port = process.env.PORT || 5000

server.listen(port,()=>{
    console.log('server is listenning on port number '+ port)
})