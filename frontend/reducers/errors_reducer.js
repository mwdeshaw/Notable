import { combineReducers } from 'redux';
import errorsReducer from './session_errors_reducer';

export default combineReducers({
    session: errorsReducer
});