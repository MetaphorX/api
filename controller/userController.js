const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

//get users
const getUsers = asyncHandler(async (req, res)=>{
    const user = await User.find()
    res.status(200).json(user)
})


//set users
const setUser = asyncHandler(async (req, res)=>{

    const {firstName, lastName} = req.body
    if(!firstName || !lastName){
        res.status(400)
        throw new Error('Fill all fields')
    }

    const user = await User.create({
        firstName,
        lastName
    })
    if(user){
        res.status(201).json({
            _id: user.id,
            firstName:firstName,
            lastName:lastName    
        })
    }

})

//update users
const updateUser = asyncHandler(async (req, res)=>{
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User does not exist')
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })
    res.status(200).json(updatedUser)
})

//delete users
const deleteUser = asyncHandler(async (req, res)=>{
    res.status(200).json({message: 'Get users'})
})


module.exports ={
    getUsers,
    setUser,
    updateUser,
    deleteUser
}