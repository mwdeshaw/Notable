import modalReducer from './modal_reducer';
import { combineReducers } from 'redux';
import searchFilterReducer from './notebooks_filter_reducer';

export default combineReducers({
    modal: modalReducer,
    searchString: searchFilterReducer
});