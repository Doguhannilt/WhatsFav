import asyncHandler from "../middlewares/asyncHandler.js";
import Category from "../models/Category.js";

const createCategory = asyncHandler(async (req, res) => {
    try {
        const {name} = req.body
        console.log(name)
        const existedName = await Category.findOne({name})
        console.log(existedName)
        if (existedName) {
            res.status(404).json({ message: 'This category is available' })
        }

        const data = new Category({ name: name })
        await data.save()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

const deleteCategory = asyncHandler(async (req, res) => {
    const response = await Category.findByIdAndDelete( req.params.id )
    res.status(201).json({ message: `The category is deleted` })
})

const getAllCategories = asyncHandler(async (req, res) => {
    const response = await Category.find({})
    res.status(201).json({response})
})



export {
    createCategory,
    deleteCategory,
    getAllCategories
}