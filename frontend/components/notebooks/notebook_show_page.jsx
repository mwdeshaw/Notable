import React from 'react';
import NavigationBarContainer from '../navigation_bar/navigation_bar_container';

const NotebookShowPage = (props) => {
    return(
        <div className='nb-show-parent'>
            <NavigationBarContainer />

            <h1>welcome to the show page</h1>
            {/* <h1 className='notebookTitle'>{this.props.notebook.title}</h1>
            <div className='notes-list'>
                Notes will go here
            </div> */}
        </div>
    );
};

export default NotebookShowPage;