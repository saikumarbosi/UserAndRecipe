const User = require('../models/User')
const bcrypt = require('bcryptjs')
const dotEnv = require('dotenv')
const jwt = require('jsonwebtoken')

dotEnv.config()
const secretKey = process.env.myScreateKey

const userRegister = async (req, res) => {
    try {
        const { username, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({ username, password: hashedPassword })
        await user.save()
        res.status(201).json(user)
    }
    catch (e) {
        console.log("Error: ", e)
        res.status(500).json({ message: "Server Error" })
    }
}

const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" })
        }
        const passwordValid = await bcrypt.compare(password, user.password)
        if(!passwordValid){
            return res.status(401).json({ message: "Invalid username or password" })
        }
        const token = jwt.sign({userId: user._id}, secretKey)
        res.status(200).json({
            username: user.username,
            password: user.password,
            token
        })
    }
    catch (e) {
    console.log("Error: ", e)
    res.status(500).json({ message: "Server Error" })
    }
}

const getUser = async(req, res) => {
    try{
        const user = await User.find()
        res.status(200).json(user)
    }
    catch (e) {
        console.log("Error: ", e)
        res.status(500).json({ message: "Server Error" })
    }
}

module.exports = { userRegister, userLogin, getUser}