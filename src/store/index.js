import { createStore, applyMiddleware } from 'redux'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import reducer from '../reducers'

const enhancer = applyMiddleware(randomId, logger)

const store = createStore(reducer, enhancer)

// dev mode
window.store = store

export default store
