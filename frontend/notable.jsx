import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;

    if (window.currentUser) {
        const preloadedState = {
            // entities: 
            session: { currentUser: window.currentUser }
        }
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }
    delete window.currentUser
    ReactDOM.render(<Root store={store}/> ,root);
});