import { DELETE_VERSION } from '../constants';
import axios from 'axios';

export const deleteVersionAction = (payload) => dispatch => {
  console.log(payload);
  axios.post(`http://localhost:5000/recipes/version/${payload._id}`, payload)
  .then(response => console.log(response.data));

  dispatch({
    type: DELETE_VERSION,
    payload
  })
};