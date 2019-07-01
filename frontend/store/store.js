import { createStore, applyMiddleware, configureStore } from 'redux';
import RootReducer from '../reducers/root';
import thunk from 'redux-thunk'

const configureStore = (preloadedState = {}) => {
    return createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(thunk)
    );
};

export default configureStore;