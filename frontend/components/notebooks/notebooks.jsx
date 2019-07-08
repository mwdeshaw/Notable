import React from 'react';
import NavigationBarContainer from '../navigation_bar/navigation_bar_container';
import NotebookIndexContainer from './notebook_index_container';
import Modal from '../modals/modal';

const Notebooks = () => {
    return (
        <div className='notebooks-parent'>
            <Modal />
            <NavigationBarContainer />
            <NotebookIndexContainer/>
        </div>
    );
};

export default Notebooks;