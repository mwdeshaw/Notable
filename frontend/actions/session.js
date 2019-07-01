import * as APIUtil from '../util/session_utils';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});


export const createNewUser = user => dispatch => (
    APIUtil.postUser(user)
        .then(user => dispatch(receiveCurrentUser(user)))
);

export const login = user => dispatch => (
    APIUtil.postSession(user)
        .then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
    APIUtil.deleteSession(user)
        .then(() => dispatch(logoutCurrentUser()))
);