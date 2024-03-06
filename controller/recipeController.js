const Recipe = require('../models/Recipe')

const createRecipe = async(req, res) => {
    try{
        const {title, description, ingradients, imageUrl, instruction} = req.body
        const recipe = new Recipe({title, description, ingradients, imageUrl, instruction})
        await recipe.save()
        res.status(200).json(recipe)
    }
    catch (e) {
        console.log("Error: ", e)
        res.status(500).json({ message: "Server Error" })
    }
}

const getRecipes = async(req, res) => {
    try{
        const recipe = await Recipe.find()
        res.status(200).json(recipe)
    }
    catch (e) {
        console.log("Error: ", e)
        res.status(500).json({ message: "Server Error" })
    }
}

const updateRecipe = async(req, res) => {
    try{
        const {title, description, ingradients, imageUrl, instruction} = req.body
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, {title, description, ingradients, imageUrl, instruction})
        if(!recipe){
            return res.status(404).json({message: "Not Found"})
        }
        res.status(200).json(recipe)
    }
    catch (e) {
        console.log("Error: ", e)
        res.status(500).json({ message: "Server Error" })
    }
    
}

const deleteRecipe = async(req, res) => {
    try{
        const recipe = await Recipe.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Recipe Deleted"})
    }
    catch (e) {
        console.log("Error: ", e)
        res.status(500).json({ message: "Server Error" })
    }
}

const getRecipe = async(req, res) => {
    try{
        const recipe = await Recipe.findById(req.params.id)
        if(!recipe){
            return res.status(404).json({message: "Not Found"})
        }
        res.status(200).json(recipe)
    }
    catch (e) {
        console.log("Error: ", e)
        res.status(500).json({ message: "Server Error" })
    }
}

module.exports = {createRecipe, getRecipes, updateRecipe, deleteRecipe, getRecipe}