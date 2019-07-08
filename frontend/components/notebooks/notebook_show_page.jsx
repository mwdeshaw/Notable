import React from 'react';
import NavigationBarContainer from '../navigation_bar/navigation_bar_container';
import NoteIndexItemForNotebooks from './note_index_item_for_notebooks';
import { withRouter } from 'react-router-dom';

class NotebookShowPage extends React.Component {
    componentDidMount() {
        //find way to remove undefined from the route bar...
        this.props.fetchNotebook(this.props.match.params.notebookId)
        .then(() => {
             this.props.history.push(`/notebooks/${this.props.notebook.id}/notes/${this.props.notebook.noteIds[this.props.notebook.noteIds.length - 1]}`)
        });

    };

    render() {
        const { notebook, currentUser, deleteNote, updateNote, fetchNote } = this.props;
        if (!notebook) {
            return (
                <div>Loading...</div>
            );
        };    
        const notes = notebook.notes;
        const notesList = notes ?
        Object.values(notebook.notes).reverse().map(note => {   
            return(
                <NoteIndexItemForNotebooks
                    key={note.id}
                    note={note}
                    notebookId={note.notebook_id}
                    author={currentUser.email}
                    deleteNote={deleteNote}
                    updateNote={updateNote}
                    fetchNote={fetchNote}
                />
            )
        }) : <div>No notes :(</div>
        return(
            <div className='nb-show-parent'>
                <div className='notebook-header'>
                    <h1>{notebook.title}</h1>
                    <p>{notes ? Object.values(notebook.notes).length : 0} notes</p>
                </div>
                <NavigationBarContainer />

                <ul className='notebook-notes-list'>
                 {notesList}
                </ul>
                
            </div>
        );
    }
};

export default withRouter(NotebookShowPage);