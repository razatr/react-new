import { SET_CURRENT_USER } from '../constants'

export default (
    accountState = 'd30a96e7-e97c-4cb5-920e-391d6c19d020',
    action
) => {
    switch (action.type) {
    case SET_CURRENT_USER:
        return action.payload.id
    default:
        return accountState
    }
}
