import User from '../models/User.js'
import bcrypt from 'bcryptjs'

import asyncHandler from '../middlewares/asyncHandler.js'

import generateToken from '../utils/createToken.js'


const createUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
      console.log('Missing fields');
      res.status(400);
      throw new Error('Please fill all the fields');
    }
  
    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log('User already exists');
      return res.status(400).send('User Already Exists');
    }
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });
  
    try {
      await newUser.save();
      generateToken(res, newUser._id);
      console.log('User created');
      return res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        isAdmin: newUser.isAdmin
      });
    } catch (error) {
      console.log('Error creating user:', error);
      return res.status(400).json({ message: 'Invalid user data' });
    }
});
  
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)

    try {

        if (!email && !password) {
            throw new Error('Please fill the fields')
        }

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            const isPasswordValid = await bcrypt.compare(password, existingUser.password)

            if (isPasswordValid) {
                generateToken(res, existingUser._id)

                res.status(201).json({
                    _id: existingUser._id,
                    username: existingUser.username,
                    email: existingUser.email,
                    isAdmin: existingUser.isAdmin
                })
            } else {
                res.status(401).json({ message: "Invalid password" })
            }
        } else {
            res.status(401).json({ message: 'User not found' })
        }
    } catch (error) {
        res.status(401)
        throw new Error("Invalid Account")
        console.log(error)
    }
})
 
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({ message: 'Logout successfully' })
})

const getAllUsers = asyncHandler(async (req, res) => {
    const All = await User.find({})

    res.status(201).json(All)
})

const deleteUserById = asyncHandler(async (req, res) => {

    let userId = req.params.id

    const userExists = await User.findOne({ _id: userId })
    if (userExists) {
        const user = await User.findByIdAndDelete(userId)
        res.status(401).json({ message: 'User is deleted' })

    } else {
        res.status(201).json({ message: `User is not found` })
    }
})

const getCurrentUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email
        })
    } else {
        res.status(404)
        throw new Error('User not found.')
    }

})

const updateCurrentUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        user.username = req.body.username || user.username
        user.email = req.body.email || user.email

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(req.body.password, salt)
            user.password = hashedPassword
        }
        const updatedUser = await user.save()
        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin
        })
    } else {
        res.status(404)
        throw new Error('User not found.')
    }
})

export {
    createUser,
    loginUser,
    logoutUser,
    getAllUsers,
    deleteUserById,
    getCurrentUserProfile,
    updateCurrentUserProfile
}