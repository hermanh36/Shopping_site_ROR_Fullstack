import * as sessionUtil from '../../api/session_api_util';
import * as userUtil from '../../api/user_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS'

const receiveCurrentUser = (user:any) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user: user.data
    }
}

const receiveSignUpUser = (user:any) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user: user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = (errors:any) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

const resetErrors = () => {
    return {
        type: RESET_SESSION_ERRORS,
    }
}

export const login = (user:any) => (dispatch:any) => {
    return (
        sessionUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON)))
    )
}

export const logout = () => (dispatch:any) => {
    return (
        sessionUtil.logout().then(() => dispatch(logoutCurrentUser()),
        err => dispatch(receiveErrors(err.responseJSON)))
    )
}

export const signup = (user:any ) => (dispatch:any) => {
    return (
        userUtil.signup(user).then((user) => (dispatch(receiveSignUpUser(user))),
        err => dispatch(receiveErrors(err.responseJSON)))
    )
}

