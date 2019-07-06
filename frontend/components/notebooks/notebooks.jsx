import React from 'react';
import { Route } from 'react-router-dom';
import NavigationBarContainer from '../navigation_bar/navigation_bar_container';
import NotebookIndexContainer from './notebook_index_container';
import NotebooksModal from '../modals/notebooks_modal';
import NoteBookShowContainer from '../modals/notebooks_modal';


const Notebooks = () => {
    return (
        <div className='notebooks-parent'>
            <Route path='/notebooks/:notebookId' component={NoteBookShowContainer} />

            <NotebooksModal />
            <NavigationBarContainer />
            <NotebookIndexContainer/>
        </div>
    );
};

export default Notebooks;