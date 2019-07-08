import React from 'react';
import NavigationBarContainer from '../navigation_bar/navigation_bar_container';
import NotesIndexContainer from './notes_index_container';
import CreateNoteContainer from './create_note_container';
import { Route } from 'react-router-dom';

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
                <NavigationBarContainer />
                <CreateNoteContainer notebook={recentNotebook} />
                <NotesIndexContainer />
            </div>
        );
    };
};

export default Notes;