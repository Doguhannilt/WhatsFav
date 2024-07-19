import asyncHandler from "../middlewares/asyncHandler.js";
import Film from "../models/Favorites.js";


const createProduct = asyncHandler(async (req, res) => {
    const {
        title,
        image,
        category,
        year,
        description,
        released,
        language,
        rating,
        numReview
    } = req.body

    if (!title || !image || !category || !year || !description || !released || !language || !rating || !numReview) {
        res.status(401).json({ message: 'Please fill all the fields' })
    }

    try {
        const FilmExists = await Film.findOne({ title })
        if (FilmExists) return res.status(401).json({message: 'The film is exists'})
        const newFilm = new Film({ title, image, category, year, description, released, language, rating, numReview })
        await newFilm.save()
        res.json(newFilm)

    } catch (error) {
        console.log(error)
    }
})
const getAllProducts = asyncHandler(async (req, res) => {
    const response = await Film.find({})
    res.json(response)
})
const createReview = asyncHandler(async (req, res) => {
    const getID = req.params.id;
    const findProduct = await Film.findById(getID);
    const { comment, rating, name, user } = req.body;

    if (findProduct) {
        const alreadyReviewed = findProduct.reviews.find(r => r.user.toString() === user.toString());

        if (alreadyReviewed) {
            res.status(400);
            throw new Error('Product already reviewed');
        }

        const review = {
            name,
            rating: Number(rating),
            comment,
            user
        };

        findProduct.reviews.push(review);
        findProduct.numReview = findProduct.reviews.length;
        findProduct.rating = findProduct.reviews.reduce((acc, item) => item.rating + acc, 0) / findProduct.reviews.length;

        await findProduct.save();
        res.status(201).json({ message: 'Review added' });
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});


export {
    createProduct,
    getAllProducts,
    createReview
}