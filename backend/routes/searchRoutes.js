import express from 'express'

// middlewares
import {authenticate, authorizeAdmin} from '../middlewares/authMiddle.js'
import { createProduct, getAllProducts, createReview } from '../controllers/productController.js'
import { SearchByName } from '../controllers/searchController.js'


const router = express.Router()


router
    .route('/')
    .post(SearchByName)



export default router