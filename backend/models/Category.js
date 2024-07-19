import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, maxLength: 32, unique: true },   
})


const Category = mongoose.model("Category", categorySchema)

export default Category