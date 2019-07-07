import { RECEIVE_ALL_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from '../actions/notes';

const noteReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_NOTES:
            return action.notes;
        case RECEIVE_NOTEBOOK:
            const nextState = Object.assign({}, state);
            nextState[action.notebook.id] = action.notebook;
            return nextState;
        case REMOVE_NOTEBOOK:
            const newState = Object.assign({}, state);
            delete newState[action.notebook.id]
            return newState;
        default:
            return state;
    };
};

export default noteReducer;