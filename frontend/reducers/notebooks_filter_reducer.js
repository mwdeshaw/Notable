import { FILTER, RESET_FILTER } from '../actions/notebook_filters';

const searchFilterReducer = (state = "", action) => {
    Object.freeze(state);
    switch (action.type) {
        case FILTER:
            return [
                ...state,
                {
                    searchString: action.searchString,
                }
            ]
        case RESET_FILTER:
            return [
                ...state,
                {
                    searchString: "",
                }
            ]
        default:
            return state;
    };
};

export default searchFilterReducer;