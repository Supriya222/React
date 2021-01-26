const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async(req,res) => {
    try{
            const users = await User.find()
            res.json(users)
    }
    catch(err){
        res.send('Error'+ err)
    }
})


router.post('/', async(req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    })
    try{
        const user1 = await user.save()
        res.json(user1)
    }catch(err){
        res.send('Error')
    }  
})

router.get('/:id', async(req,res) => {
    try{
            const user =  await User.findById(req.params.id)
            res.json(user)
    }
    catch(err){
        res.send('Error'+ err)
    }
})

router.patch('/:id',async(req,res) =>{
    try{
       const user = await User.findById(req.params.id)
       user.role = req.body.role
       const user1= await user.save()
       res.json(user1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id',async(req,res) =>{
    try{
       const user = await User.findById(req.params.id)
       
       const user1= await user.delete()
       res.json(user1)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router