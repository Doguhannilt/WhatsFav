import express from 'express'
import {
    authenticate,
    authorizeAdmin
} from '../middlewares/authMiddle.js'

import {
    selectingHorror,
    selectingSad,
    selectingTrajedic,
    selectingScifi,
    selectingVintage,
    selectingTheatre,
    selectingComedy
} from '../controllers/selectingController.js'

const router = express.Router()

// Horror
router
    .route('/select/horror')
    .get(authenticate,  selectingHorror)
// Comedy
router
    .route('/select/comedy')
    .get(authenticate,  selectingComedy)
// SciFi
router
    .route('/select/scifi')
    .get(authenticate,  selectingScifi)
// Trajedic
router
    .route('/select/trajedic')
    .get(authenticate,  selectingTrajedic)
// Sad
router
    .route('/select/sad')
    .get(authenticate,  selectingSad)
// Vintage
router
    .route('/select/vintage')
    .get(authenticate,  selectingVintage)
// Theatre
router
    .route('/select/theatre')
    .get(authenticate, selectingTheatre)



export default router