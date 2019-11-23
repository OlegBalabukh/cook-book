import { 
  ADD_RECIPE,
  DELETE_RECIPE,
  SET_ACTIVE_RECIPE,
  UPDATE_RECIPE,
  SAVE_RECIPE_VERSION,
  SET_ACTIVE_VERSION,
  DELETE_VERSION
} from '../constants'

export const recipesReducer = (state = [], {type, payload}) => {
  switch(type) {

    case ADD_RECIPE:
      return [
        {
          id: payload.id,
          name: payload.name,
          ingredients: payload.ingredients,
          date: new Date(payload.id).toString().substr(0, 24),
          isFocused: false,
          oldVersions: []
        },
        ...state
      ];

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

      case SAVE_RECIPE_VERSION:
        return state.map(recipe => {
          if ( recipe.id === payload.id ) {
            const oldVersion = {
              id: payload.id,
              name: payload.name,
              ingredients: payload.ingredients,
              date: payload.date,
              isFocused: false
            }
            return {
              ...recipe,
              oldVersions: [oldVersion, ...recipe.oldVersions]
            }
          }
          return recipe;
        });

      case SET_ACTIVE_VERSION:
        return state.map(recipe => {
          if (recipe.isFocused) {
            return {
              ...recipe,
              oldVersions: recipe.oldVersions
                .map(version => {
                version.id === payload
                  ? version = {...version, isFocused: true}
                  : version = {...version, isFocused: false}
                  return version;
                })
            }
          }
          return recipe;
        });
      
      case DELETE_VERSION:
        return state.map(recipe => {
          if (recipe.isFocused) {
            return {
              ...recipe,
              oldVersions: recipe.oldVersions
                .filter(version => version.id !== payload)
            }
          }
          return recipe;
        });
      
      default:
        return state
  }
}