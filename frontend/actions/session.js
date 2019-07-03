import * as APIUtil from '../util/session_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});

export const createNewUser = user => dispatch => (
    APIUtil.postUser(user)
        .then(user => {
            dispatch(receiveCurrentUser(user))
            dispatch(clearErrors())
        }, err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

export const login = user => dispatch => (
    APIUtil.postSession(user)
        .then(user => {
            dispatch(receiveCurrentUser(user))
            dispatch(clearErrors())
        }, err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

export const logout = () => dispatch => (
    APIUtil.deleteSession()
        .then(() => dispatch(logoutCurrentUser()))
);