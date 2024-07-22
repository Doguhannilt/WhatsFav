// REQ
import express from 'express'
import dotenv from 'dotenv'
import path from "path";

// IMPORTS
import connectDB from "./config/database.js";

// Middlewares
import { middlewares } from './config/middlewares.js';

// Routers
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import selectRoutes from './routes/selectRoutes.js'
import filterRoutes from './routes/userFilterRoutes.js'
import imageRoutes from './routes/imageRoutes.js'
import searchRoutes from './routes/searchRoutes.js'
import favoriteRoutes from './routes/favoriteRoutes.js'

// Classes
dotenv.config()

// Connection to the DB func
connectDB()

const PORT = process.env.PORT || 3000
const app = express()

// Middlewares func
middlewares(app, express)

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/product', productRoutes)
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/movies', selectRoutes)
app.use('/api/v1/filter', filterRoutes)
app.use('/api/v1/image', imageRoutes)
app.use('/api/v1/search', searchRoutes)
app.use('/api/v1/favorites', favoriteRoutes)

app.listen(PORT, () => console.log(`Server is running ${PORT}`))