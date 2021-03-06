import { DELETE_RECIPE } from '../constants'
import axios from 'axios';

export const deleteRecipeAction = (payload) => dispatch => {
  axios.delete(`/recipes/${payload}`)
  .then(response => console.log(response.data));
  
  dispatch({
    type: DELETE_RECIPE,
    payload
  });
};