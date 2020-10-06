import { SET_CURRENT_USER } from '../constants'

export default (
    accountState = 'a304959a-76c0-4b34-954a-b38dbf310360',
    action
) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return action.payload.id
        default:
            return accountState
    }
};
