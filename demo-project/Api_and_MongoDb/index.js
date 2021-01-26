const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Users'

const index = express()
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log('CONNECTED..')
})

index.use(express.json())


const usersRouter = require('./routes/users')
index.use('/users',usersRouter)


index.listen(9000,function(){
    console.log('Server started')
})

