const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  ingredients: { type: String, required: true},
  date: { type: String, required: true },
  isFocused: { type: Boolean, required: true },
  oldVersions: { type: Array, required: true },
}, {
  timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;