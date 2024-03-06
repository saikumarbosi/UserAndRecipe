const express = require('express')
const router = express.Router()
const recipeController = require('../controller/recipeController')

router.post('/createRecipe', recipeController.createRecipe)
router.get('/recipes', recipeController.getRecipes)
router.put('/updateRecipe/:id', recipeController.updateRecipe)
router.delete('/deleteRecipe/:id', recipeController.deleteRecipe)
router.get('/recipe/:id', recipeController.getRecipe)

module.exports = router