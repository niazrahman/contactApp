const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const router = require('./route')
const app = express()

app.set('view engine','ejs')
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use('/contacts',router)
app.get('/',(req,res)=>{
 res.json({
     message: 'welcome'
 })
})

const PORT = process.env.PORT||1010
mongoose.connect(`mongodb://admin:admin@cluster0-shard-00-00.vrfoh.mongodb.net:27017,cluster0-shard-00-01.vrfoh.mongodb.net:27017,cluster0-shard-00-02.vrfoh.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-mlimxa-shard-0&authSource=admin&retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
    })
})
.catch(e=>{
    console.log(e)
})
