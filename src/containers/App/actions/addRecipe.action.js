import axios from 'axios';

import { ADD_RECIPE } from '../constants';
import { getRecipesAction } from './getRecipes.action';

export const addRecipeAction = (payload) => dispatch => {
  axios.post('/recipes/add', payload)
  .then(response => console.log(response.data))
  .then(() => dispatch({ type: ADD_RECIPE }))
  .then(() => dispatch(getRecipesAction()))
  .then(() => console.log('Recipes fetched from db!'));
};