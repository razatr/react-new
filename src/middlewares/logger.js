import { fromJS } from 'immutable'

export default store => next => action => {
    console.log('before', fromJS(store.getState()).toJS())
    console.log('action', action)
    next(action)
    console.log('after', fromJS(store.getState()).toJS())
};
