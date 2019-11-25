const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const ingredients = req.body.ingredients;
  const isFocused = Boolean(req.body.isFocused);
  const date = new Date(req.body.id).toString().substr(0, 24)
  const oldVersions = [];

  const newRecipe = new Recipe({
    id,
    name,
    ingredients,
    isFocused,
    date,
    oldVersions
  });

  newRecipe.save()
  .then(() => res.json('Recipe added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;