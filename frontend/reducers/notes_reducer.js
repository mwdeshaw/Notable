import { RECEIVE_ALL_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from '../actions/notes';

const notesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_NOTES:
            return action.notes;
        case RECEIVE_NOTE:
            const nextState = Object.assign({}, state);
            nextState[action.note.id] = action.note;
            return nextState;
        case REMOVE_NOTE:
            const newState = Object.assign({}, state);
            delete newState[action.note.id]
            return newState;
        default:
            return state;
    };
};

export default notesReducer;