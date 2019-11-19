import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { recipesReducer as reducer } from './containers/App/reducers/recipes.reducer';

export default createStore(reducer, [], composeWithDevTools(applyMiddleware()));