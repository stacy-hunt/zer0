import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import artworkReducer from './reducers/artworkReducer'

const reducer = combineReducers({
    artwork: artworkReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => {
    const storeNow = store.getState()
})
export default store