import { ADD_RECIPE } from '../constants';
import axios from 'axios';

export const addRecipeAction = (payload) => dispatch => {
  axios.post('http://localhost:5000/recipes/add', payload)
  .then(response => console.log(response.data));
  
  dispatch({
    type: ADD_RECIPE,
    payload
  });  
};