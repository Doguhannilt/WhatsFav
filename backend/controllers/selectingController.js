import asyncHandler from "../middlewares/asyncHandler.js";
import Film from "../models/Favorites.js";



const selectingHorror = asyncHandler(async (req, res) => {
    try {
        const horrorFilms = await Film.find({ category: '669a0a92a4370ad8237b3228' });
        res.status(200).json(horrorFilms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const selectingSad = asyncHandler(async (req, res) => {
    try {
        const horrorFilms = await Film.find({ category: '669a0aaaa4370ad8237b3238' });
        res.status(200).json(horrorFilms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
const selectingScifi = asyncHandler(async (req, res) => {
    try {
        const horrorFilms = await Film.find({ category: '669a0aa0a4370ad8237b3230' });
        res.status(200).json(horrorFilms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
const selectingTrajedic = asyncHandler(async (req, res) => {
    try {
        const horrorFilms = await Film.find({ category: '669a0aa6a4370ad8237b3234' });
        res.status(200).json(horrorFilms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
const selectingVintage = asyncHandler(async (req, res) => {
    try {
        const horrorFilms = await Film.find({ category: '669a0ab1a4370ad8237b323c' });
        res.status(200).json(horrorFilms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
const selectingTheatre = asyncHandler(async (req, res) => {
    try {
        const horrorFilms = await Film.find({ category: '669a0de643dbb3e2fdfd87a2' });
        res.status(200).json(horrorFilms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
const selectingComedy = asyncHandler(async (req, res) => {
    try {
        const horrorFilms = await Film.find({ category: '669a0a9ba4370ad8237b322c' });
        res.status(200).json(horrorFilms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


export {
    selectingHorror,
    selectingSad,
    selectingScifi,
    selectingTrajedic,
    selectingVintage,
    selectingTheatre,
    selectingComedy
}