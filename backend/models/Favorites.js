import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema

const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
}, { timestamps: true })


const filmSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: ObjectId, ref: 'Category', required: true },
    year: {type: String, required:true},
    description: { type: String, required: true },
    released: { type: String, required: true },
    language: {type: String, required: true},
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numReview: { type: Number, required: true, default: 0 },
}, { timestamps: true })

const Film = mongoose.model('Film', filmSchema)
export default Film