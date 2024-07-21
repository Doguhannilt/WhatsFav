import asyncHandler from "../middlewares/asyncHandler.js";
import Film from "../models/Favorites.js";



const ratingFilter = asyncHandler(async (req, res) => {
    try {
        const { rating } = req.body
        console.log('Received ratingNumber:', rating);
        try {
            const response = await Film.find({ rating: rating })
            res.status(200).json(response);
        } catch (error) {
            console.log(error)
        }
    } catch (error) {

    }
})

const yearFilter = asyncHandler(async (req, res) => {
    try {
        const { year } = req.body
        try {
            console.log(year)
            const response = await Film.find({ year: year })
            res.json(response)
        } catch (error) {
            console.log(error)
        }


    } catch (error) {

    }
})
const nameFilter = asyncHandler(async (req, res) => {
    try {
        const { name } = req.body
        try {
            const response = await Film.find({ title: name })
            res.status(200).json(response);
        } catch (error) {
            console.log(error)
        }
    } catch (error) {

    }
})



export {
    ratingFilter,
    yearFilter,
    nameFilter
}