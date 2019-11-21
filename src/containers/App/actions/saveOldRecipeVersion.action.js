import { SAVE_OLD_RECIPE_VERSION } from '../constants'

export const saveOldRecipeVersionAction = (payload) => ({
  type: SAVE_OLD_RECIPE_VERSION,
  payload
});