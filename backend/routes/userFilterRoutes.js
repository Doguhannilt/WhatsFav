import express from 'express'
import {
    authenticate,
    authorizeAdmin
} from '../middlewares/authMiddle.js'
import { ratingFilter, yearFilter, nameFilter } from '../controllers/userFilterController.js'


const router = express.Router()

router
    .route('/rating')
    .post(authenticate, ratingFilter)

router
    .route('/year')
    .post(authenticate, yearFilter)
router
    .route('/name')
    .post(authenticate, nameFilter)


export default router