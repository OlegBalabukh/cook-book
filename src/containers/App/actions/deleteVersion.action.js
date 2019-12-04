import axios from 'axios';
import { DELETE_VERSION } from '../constants';

export const deleteVersionAction = (payload) => dispatch => {
  axios.post(`/recipes/version/${payload._id}`, payload)
  .then(response => console.log(response.data));

  dispatch({
    type: DELETE_VERSION,
    payload
  })
};