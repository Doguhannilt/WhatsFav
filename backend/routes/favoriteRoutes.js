import express from 'express'

// middlewares
import { sendFavoriteFilms } from '../controllers/favoritesController.js'

const router = express.Router()


// favoriteRoutes.js
router
    .route('/:id')
    .get(sendFavoriteFilms); 




export default router