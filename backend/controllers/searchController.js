import asyncHandler from "../middlewares/asyncHandler.js";
import Film from "../models/Favorites.js";



const SearchByName = asyncHandler(async (req, res) => {
    try {
        const { search } = req.body
        const res_search = await Film.find({ title: search })
        res.status(200).json(res_search)
    } catch (error) {
        console.log(error)
    }


})

export {
    SearchByName
} 