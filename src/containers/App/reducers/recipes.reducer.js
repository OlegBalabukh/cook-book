import { 
  ADD_RECIPE
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

      case "DELETE_RECIPE":
        return state.filter(recipe =>
          recipe.id !== payload );

      case "SET_ACTIVE__RECIPE":
        return state.map(recipe => {
          recipe.id === payload
            ? recipe = {...recipe, isFocused: true}
            : recipe = {...recipe, isFocused: false}
          return recipe;
        });
      
        case 'EDIT_RECIPE':
        return payload;

      case "OPEN_PREV_RECIPE_VERSION":
        return state.map(recipe => {
          recipe.isFocused &&
          ( recipe = {
            ...recipe,
            oldVersions: [ ...recipe.oldVersions, payload]
          })
          return recipe;
        });
      
        case "DELETE_PREV_RECIPE_VERSION":
        return payload;


      // case 'ADD_TASKS_FROM_LOCAL_STORAGE':
      //   return payload;
      
      default:
        return state
  }
}