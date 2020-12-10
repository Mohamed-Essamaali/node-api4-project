require('dotenv').config()
const express= require('express')


const server = express()

server.use(express.json())

server.get('/',(req,res)=>{
    const myWords = process.env.MSG || "It is a great moment to learn Node js"
    res.status(200).json({message: myWords})
})
 
const port = process.env.PORT || 5000

server.listen(port,()=>{
    console.log('server is listenning on port number '+ port)
})