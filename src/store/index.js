import { createStore, applyMiddleware } from 'redux'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import reducer from '../reducers'

const enhancer = applyMiddleware(api, randomId, logger)

const store = createStore(reducer, enhancer)

// dev mode
window.store = store

export default store
