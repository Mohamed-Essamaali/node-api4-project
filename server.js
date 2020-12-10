require('dotenv').config()
const express= require('express')


const server = express()

server.use(express.json())

server.get('/',(req,res)=>{
    const myWords = process.env.FUN_FACT || "You can't make it without fun facts"
    const Welcome = process.env.COHORT
    res.status(200).json({myWords,Welcome})
})
 
const port = process.env.PORT || 5000

server.listen(port,()=>{
    console.log('server is listenning on port number '+ port)
})