import express from 'express'

// controllers
import {
    createUser,
    loginUser,
    logoutUser,
    getAllUsers,
    deleteUserById,
    getCurrentUserProfile,
    updateCurrentUserProfile
} from '../controllers/userController.js'


// middlewares
import {authenticate, authorizeAdmin} from '../middlewares/authMiddle.js'


const router = express.Router()

router
    .route('/signup')
    .post(createUser)
    .get( getAllUsers)

router
    .route('/auth')
    .post(loginUser)
router
    .route('/logout')
    .get(logoutUser)
router
    .route('/:id')
    .delete(authenticate, authorizeAdmin, deleteUserById)
router
    .route('/profile')
    .get(authenticate, getCurrentUserProfile)
    .put(authenticate, updateCurrentUserProfile)

export default router