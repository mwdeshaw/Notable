import React from 'react';
import { Route } from 'react-router-dom';
import NavigationBarContainer from '../navigation_bar/navigation_bar_container';
import NotebookIndexContainer from './notebook_index_container';
import Modal from '../modals/modal'


const Notebooks = () => {
    return (
        <div>
            <Modal />
            <NavigationBarContainer />
            <NotebookIndexContainer/>
        </div>
    );
};

export default Notebooks;