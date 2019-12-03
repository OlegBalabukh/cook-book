import axios from 'axios';
import { UPDATE_RECIPE } from '../constants';

export const updateRecipeAction = (payload) => dispatch => {
  axios.post(`http://localhost:5000/recipes/update/${payload.edited._id}`, payload)
  .then(response => console.log(response.data));

  dispatch({
    type: UPDATE_RECIPE,
    payload
  });
};
