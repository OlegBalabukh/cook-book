import axios from 'axios';
import { GET_RECIPES } from '../constants';

export const getRecipesAction = () => dispatch => {
  axios.get('/recipes/')
  .then(response => response.data)
  .then(payload => dispatch({ type: GET_RECIPES, payload}))
};