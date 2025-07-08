const express=require('express')
const { default: mongoose } = require('mongoose')
const app=express()
require('dotenv').config()
const urlroutes=require('./routes/urls')
const Mongo_url= process.env.MONGO_URL
const Port=process.env.PORT || 3000

app.use(express.json())
app.use("/data",urlroutes)
app.use((req,res,next)=>{
    return res.status(404).json({'message':'404 not found'})
})
mongoose.connect(Mongo_url).then(()=>{
     console.log('Mongodb is conneted')
     app.listen(Port,(req,res,next)=>{
        console.log(`server is listen ${Port}`)
     })
}).catch((er)=>{
    console.log('mond]godb is not conncted..',er)
})

