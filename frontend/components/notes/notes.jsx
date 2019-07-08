import React from 'react';
import NavigationBarContainer from '../navigation_bar/navigation_bar_container';
import NotesIndexContainer from './notes_index_container';

const Notebooks = () => {
    return (
        <div className='notes-parent'>
            {/* <NotebooksModal /> */}
            <NavigationBarContainer />
            <NotesIndexContainer />
        </div>
    );
};

export default Notebooks;