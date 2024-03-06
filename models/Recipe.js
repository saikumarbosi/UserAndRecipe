const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingradients: {
        type: String,
        required: true   
    },
    imageUrl: {
        type: String,
        required: true
    },
    instruction: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Recipe", recipeSchema)