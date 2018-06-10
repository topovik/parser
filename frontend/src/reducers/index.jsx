import { combineReducers } from 'redux'
import fetchReducer from './fetchReducer'
import articleReducer from './articleReducer'

const reducer = combineReducers({fetchReducer, articleReducer});

export default reducer;