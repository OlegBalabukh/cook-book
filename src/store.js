import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { recipesReducer as reducer } from './containers/App/reducers/recipes.reducer';

export default createStore(reducer, [], composeWithDevTools(applyMiddleware(thunk)));