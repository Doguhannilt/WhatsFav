import express from 'express'

// middlewares
import {authenticate, authorizeAdmin} from '../middlewares/authMiddle.js'
import { createProduct, getAllProducts, createReview } from '../controllers/productController.js'


const router = express.Router()


router
    .route('/')
    .post(authenticate, createProduct)
    .get(authenticate, authorizeAdmin, getAllProducts)

router
    .route('/:id/review')
    .post(authenticate, createReview)
    



export default router