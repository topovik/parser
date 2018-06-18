import { combineReducers } from 'redux'
import fetchReducer from './fetchReducer'
import articleReducer from './articleReducer'
import asideReducer from './asideReducer'

const reducer = combineReducers({fetchReducer, articleReducer, asideReducer});

export default reducer;