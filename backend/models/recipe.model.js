const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  id: { type: Number},
  date: {type: String},
  name: { type: String},
  ingredients: { type: String},
  isFocused: { type: Boolean},
  oldVersions: { type: Array},
}, {
  timestamps: false,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;