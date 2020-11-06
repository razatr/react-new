import { createStore, applyMiddleware } from 'redux'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import thunk from 'redux-thunk'
import reducer from '../reducers'

const enhancer = applyMiddleware(randomId, thunk, logger)

const store = createStore(reducer, enhancer)

// dev mode
window.store = store

export default store
