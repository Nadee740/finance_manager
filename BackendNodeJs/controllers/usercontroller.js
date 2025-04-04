const express = require('express')
const router = express.Router()
const userServices = require('../services/userservice')

router.post('/sign-up', userServices.userSignUp);

router.post('/sign-in', userServices.userSignIn);

router.get('/info', userServices.getUser);

router.post("/update", userServices.updateUser);


module.exports=router