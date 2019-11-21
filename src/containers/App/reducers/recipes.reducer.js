import { 
  ADD_RECIPE,
  DELETE_RECIPE,
  SET_ACTIVE_RECIPE,
  UPDATE_RECIPE,
  SAVE_OLD_RECIPE_VERSION
} from '../constants'

export const recipesReducer = (state = [], {type, payload}) => {
  switch(type) {

    case ADD_RECIPE:
      return state.concat({
        id: payload.id,
        name: payload.name,
        ingredients: payload.ingredients,
        date: new Date(payload.id).toString().substr(0, 24),
        isFocused: false,
        oldVersions: []
      });

      case DELETE_RECIPE:
        return state.filter(recipe =>
          recipe.id !== payload );

      case SET_ACTIVE_RECIPE:
        return state.map(recipe => {
          recipe.id === payload
            ? recipe = {...recipe, isFocused: true}
            : recipe = {...recipe, isFocused: false}
          return recipe;
        });
      
      case UPDATE_RECIPE:
      return state.map(recipe => {
        if ( recipe.id === payload.id ) {
          const newId = Date.now();
          return {
            ...recipe,
            id: newId,
            ingredients: payload.ingredients,
            date: new Date(newId).toString().substr(0, 24)
          }
        }
        return recipe; 
      });

      case SAVE_OLD_RECIPE_VERSION:
        return state.map(recipe => {
          if ( recipe.id === payload.id ) {
            return {
              ...recipe,
              oldVersions: [ ...recipe.oldVersions, payload]
            }
          }
          return recipe;
        });

      case "OPEN_PREV_RECIPE_VERSION":
        return state;
      
        case "DELETE_PREV_RECIPE_VERSION":
        return payload;

      
      default:
        return state
  }
}