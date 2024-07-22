import asyncHandler from "../middlewares/asyncHandler.js";
import Film from "../models/Favorites.js";

const sendFavoriteFilms = asyncHandler(async (req, res) => {
    try {
        const response_send_favorite_films = await Film.findById(req.params.id); 
        if (!response_send_favorite_films) {
            return res.status(404).json({ message: 'Film not found' });
        }
        res.status(200).json(response_send_favorite_films); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
});




export {
    sendFavoriteFilms,
}