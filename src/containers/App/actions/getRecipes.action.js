import { GET_RECIPES } from '../constants';
import axios from 'axios';

export const getRecipesAction = () => dispatch => {
  axios.get('http://localhost:5000/recipes/')
  .then(response => response.data)
  .then(payload => dispatch({ type: GET_RECIPES, payload}))
};