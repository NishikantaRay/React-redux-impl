import upDownReducer from './upDown'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    upDown: upDownReducer
})

export default allReducers