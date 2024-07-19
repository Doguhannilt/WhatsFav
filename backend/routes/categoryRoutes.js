import express from 'express'

// middlewares
import { authenticate, authorizeAdmin } from '../middlewares/authMiddle.js'


import { createCategory, deleteCategory, getAllCategories } from '../controllers/categoryController.js'


const router = express.Router()


router
    .route('/')
    .post(authenticate, authorizeAdmin, createCategory)
    .get(authenticate, authorizeAdmin, getAllCategories)

router
    .route('/:id')
    .delete(authenticate, authorizeAdmin, deleteCategory)
    




export default router