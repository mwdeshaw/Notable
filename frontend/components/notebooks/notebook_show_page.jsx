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

    render() {
        const {notebook, currentUser, deleteNote, updateNote, fetchNote, openModal, updateNoteModal, closeModal } = this.props;
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
                    openModal={openModal}
                    closeModal={closeModal}
                    updateNoteModal={updateNoteModal}
                    parentPath={this.props.location.pathname}
                    childPath={`notes/notebooks/${note.notebook_id}/${note.id}`}
                />
            )
        }) : <div>No notes :(</div>
        return(
            <div className='nb-show-parent'>
                <div className='nb-show-index-parent'>
                    <div className='notebook-header'>
                        <h1 className='notes-nb-h1'>{notebook.title}</h1>
                        <div className='other-header-elements-nb'>
                            <p className='note-count-nb'>{notes ? Object.values(notebook.notes).length : 0} notes</p>
                            <button className='filter-tag-nb'><i className="fas fa-tags fa-lg"></i></button> 
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