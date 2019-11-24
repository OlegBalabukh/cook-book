import { SAVE_RECIPE_VERSION } from '../constants'

export const saveRecipeVersionAction = (payload) => ({
  type: SAVE_RECIPE_VERSION,
  payload
});