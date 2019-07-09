import React from 'react';
import NoteDropdownListItem from './note_dropdown_list_item';

class NoteDropdownList extends React.Component {
    // componentDidMount() {
    //     this.props.fetchNotebook(this.props.notebook.id);
    // }

    render() {
        const { notebook, currentUser, deleteNote } = this.props;

        if (!notebook) {
            return (
                <div>Loading...</div>
            );
        };
        const notes = notebook.notes;
        const notesList = notes ?
            Object.values(this.props.notebook.notes).reverse().map(note => {
                
                return (
                        <NoteDropdownListItem
                            key={note.id}
                            note={note}
                            notebookId={note.notebook_id}
                            author={currentUser}
                            deleteNote={deleteNote}
                        />
                )
            }) 
            : <div>No notes :(</div>

        return (
        <div className='note-list-dropdown'>
            {(notesList)}
        </div>
        );
    };
};

export default NoteDropdownList;