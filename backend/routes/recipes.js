const router = require('express').Router();
let Recipe = require('../models/recipe.model');

// get all recipes from db
router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

// add new recipe to db
router.route('/add').post((req, res) => {
  const newRecipe = new Recipe({
    id: Number(req.body.id),
    date: new Date(req.body.id).toString().substr(0, 24),
    name: req.body.name,
    ingredients: req.body.ingredients,
    isFocused: false,
    oldVersions: []
  });
  newRecipe.save()
  .then(() => res.json('Recipe added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// update recipe
router.route('/update/:id').post((req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      recipe.id = Number(req.body.id);
      recipe.ingredients = req.body.ingredients;
      recipe.date = new Date(req.body.id).toString().substr(0, 24);
      recipe.oldVersions.push(req.body.oldVersion);
      recipe.save()
        .then(() => res.json('Recipe updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// delete recipe
router.route('/:id').delete((req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => res.json('Recipe deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// delete version
router.route('/version/:id').post((req, res) => {
  Recipe.update(
    {"_id": req.params.id},
    { $pull: { "oldVersions" : { "id": req.body.id } } },
    { safe: true }
  )
  .then(() => res.json('Recipe updated!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;