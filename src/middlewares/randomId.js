import { v4 as uuidv4 } from 'uuid'

export default store => next => action => {
    if(action.generateId)
        next({...action,
        randomId: uuidv4()})
    else if (!action.randomId){
        next(action)
    }
};