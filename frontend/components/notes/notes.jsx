import React from 'react';
import NotesIndexContainer from './notes_index_container';
import NavigationBarContainer from '../navigation_bar/navigation_bar_container';

class Notes extends React.Component {
    componentDidMount() {
        this.props.fetchNotebooks();
    };

    render() {
        const recentNotebook = this.props.notebooks[0];

        if (!recentNotebook) {
            return null;
        }
        return( 
            <div className='notes-parent'>
                <NavigationBarContainer/>
                <NotesIndexContainer />
            </div>
        );
    };
};

export default Notes;