import { UPDATE_RECIPE } from '../constants';
import axios from 'axios';

export const updateRecipeAction = (payload) => dispatch => {
  console.log(payload);
  axios.post(`http://localhost:5000/recipes/update/${payload.edited._id}`, payload)
  .then(response => console.log(response.data));

  dispatch({
    type: UPDATE_RECIPE,
    payload
  });
};
