import { combineReducers } from 'redux'
import fetchReducer from './fetchReducer'
import articleReducer from './articleReducer'
import asideReducer from './asideReducer'
import sliderReducer from './sliderReducer'

const reducer = combineReducers({fetchReducer, articleReducer, asideReducer, sliderReducer});

export default reducer;