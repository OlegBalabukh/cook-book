const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

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
  .then(() => res.json('New Recipe added to db!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      recipe.id = Number(req.body.edited.id);
      recipe.ingredients = req.body.edited.ingredients;
      recipe.date = new Date(req.body.edited.id).toString().substr(0, 24);
      recipe.oldVersions.push(req.body.oldVersion);
      recipe.save()
        .then(() => res.json('Recipe updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => res.json('Recipe deleted from db!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/version/:id').post((req, res) => {
  Recipe.update(
    {"_id": req.params.id},
    { $pull: { "oldVersions" : { "id": req.body.id } } },
    { safe: true }
  )
  .then(() => res.json('Recipe version deleted from db!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;