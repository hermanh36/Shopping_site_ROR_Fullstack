import { RECEIVE_CURRENT_USER} from "../actions/session_actions";

const usersReducer = (state = {user: null}, action:any) => {
    Object.freeze(state);
    let newState:any = Object.assign({},state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {user: action.user.id}
        default:
            return state;
    }
}

export default usersReducer;