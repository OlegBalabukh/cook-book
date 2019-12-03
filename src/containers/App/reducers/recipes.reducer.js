import {
  GET_RECIPES,
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

    case GET_RECIPES:
      return payload.slice().reverse()
        .map(recipe => ({
          ...recipe,
          oldVersions: recipe.oldVersions.slice().reverse()
        })
      );

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
        ...state.filter(recipe => recipe.name !== payload.name)
      ]

      case DELETE_RECIPE:
        return state.filter(recipe =>
          recipe._id !== payload );

      case SET_ACTIVE_RECIPE:
        return state.map(recipe => {
          recipe.id === payload
            ? recipe = {...recipe, isFocused: true}
            : recipe = {...recipe, isFocused: false}
          return recipe;
        });
      
      case UPDATE_RECIPE:
        console.log(payload);
        console.log(state);
        return state.map(recipe => {
          if ( recipe._id === payload.edited._id ) {
            return {
              ...recipe,
              name: payload.edited.name,
              id: payload.edited.id,
              ingredients: payload.edited.ingredients,
              date: new Date(payload.edited.id).toString().substr(0, 24),
              oldVersions: [payload.oldVersion, ...recipe.oldVersions]
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
                .filter(version => version.id !== payload.id)
            }
          }
          return recipe;
        });
      
      default:
        return state
  }
}