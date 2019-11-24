import { DELETE_RECIPE } from '../constants'

export const deleteRecipeAction = (payload) => ({
  type: DELETE_RECIPE,
  payload
});