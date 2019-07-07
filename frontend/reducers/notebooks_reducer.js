import { RECEIVE_ALL_NOTEBOOKS, RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from '../actions/notebooks';

const notebooksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_NOTEBOOKS:
            return action.notebooks;
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

export default notebooksReducer;