import React from 'react';
import NavigationBarContainer from '../navigation_bar/navigation_bar_container';
// import NotebookIndexContainer from './notebook_index_container';

const Notebooks = () => {
    return (
        <div className='notes-parent'>
            {/* <NotebooksModal /> */}
            <NavigationBarContainer />
            {/* <NotebookIndexContainer /> */}
        </div>
    );
};

export default Notebooks;