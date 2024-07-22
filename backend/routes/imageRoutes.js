import express from 'express'

// middlewares
import {authenticate, authorizeAdmin} from '../middlewares/authMiddle.js'
import { createProduct, getAllProducts, createReview } from '../controllers/productController.js'


const router = express.Router()





export default router