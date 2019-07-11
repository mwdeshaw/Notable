import React from 'react';
import NavigationBarContainer from '../navigation_bar/navigation_bar_container';
import NoteIndexItemForNotebooks from '../notes/note_index_item_for_notebooks';
import { withRouter } from 'react-router-dom';
import NotesModal from '../modals/notes_modal';

class NotebookShowPage extends React.Component { 
    componentDidMount() {
        this.props.fetchNotebook(this.props.match.params.notebookId)
        .then(() => {
            this.props.history.push(`/notebooks/${this.props.notebook.id}/notes/${this.props.notebook.noteIds[this.props.notebook.noteIds.length - 1]}`)
            this.props.openModal(`nbNotesUpdate,${this.props.notebook.noteIds[this.props.notebook.noteIds.length - 1]},${this.props.notebook.id}`)
        });
    };
        componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.props.fetchNotebook(this.props.match.params.notebookId)
                .then(() => {
                    this.props.closeModal()
                    this.props.openModal(`nbNotesUpdate,${this.props.notebook.noteIds[this.props.notebook.noteIds.length - 1]},${this.props.notebook.id}`)
            });
        }
    };

    titleizer(str) {
        if (str.length >= 32) {
            return str.slice(0, 32) + "...";
        } else {
            return str;
        }
    }

    render() {
        const { notebook, currentUser, deleteNote, updateNote, fetchNote, openModal, updateNoteModal, closeModal, fetchNotebook } = this.props;
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
                    notebook={notebook}
                    author={currentUser}
                    deleteNote={deleteNote}
                    updateNote={updateNote}
                    fetchNote={fetchNote}
                    fetchNotebook={fetchNotebook}
                    openModal={openModal}
                    closeModal={closeModal}
                    updateNoteModal={updateNoteModal}
                    parentPath={this.props.location.pathname}
                    childPath={`notes/notebooks/${note.notebook_id}/${note.id}`}
                />
            )
        }) : <div>&#160;&#160;No notes yet...</div>
        return(
            <div className='nb-show-parent'>
                <div className='nb-show-index-parent'>
                    <div className='notebook-header'>
                        <h1 className='notes-nb-h1'>{this.titleizer(notebook.title)}</h1>
                        <div className='other-header-elements-nb'>
                            <p className='note-count-nb'>{notes ? Object.values(notebook.notes).length : 0} notes</p>
                        </div>
                    </div>
                    <div className='list-container'>
                        <NotesModal/>
                        <NavigationBarContainer />
                        <ul className='notebook-notes-list'>
                            {notesList}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(NotebookShowPage);