import React from 'react';
import NoteIndexItemForNotes from './note_index_item_for_notes';
import { withRouter } from 'react-router-dom';
import NotesModal from '../modals/notes_modal';

class NotesIndex extends React.Component {
    componentDidMount() {
        this.props.fetchNotes()
            .then(() => {
                if (this.props.notes.length !== 0) {
                    this.props.history.push(`/notes/${this.props.notes[0].id}`)
                    this.props.openModal(`nbNotesUpdate,${this.props.notes[0].id},${this.props.notes[0].notebook_id}`)
                }
            });
    };

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.props.fetchNote(this.props.lastNote.id)
                .then(() => {
                    this.props.closeModal()
                    this.props.openModal(`nbNotesUpdate,${this.props.lastNote.id},${this.props.lastNote.notebook_id}`)
                });
        }
    };

    render() {
        if (!this.props.notes) {
            return (
                <div>Loading...</div>
            );
        };
        const notes = this.props.notes;
        let notesList = [];
        if (this.props.searchString !== "" && this.props.searchString.length !== []) {
            notesList = this.props.filteredNotes.map(note => {
                return (
                    <NoteIndexItemForNotes
                        key={note.id}
                        note={note}
                        author={this.props.currentUser}
                        deleteNote={this.props.deleteNote}
                        updateNote={this.props.updateNote}
                        fetchNote={this.props.fetchNote}
                        openModal={this.props.openModal}
                        closeModal={this.props.closeModal}
                        updateNoteModal={this.props.updateNoteModal}
                        parentPath={this.props.location.pathname}
                        childPath={`notes/${note.id}`}
                    />
                );
        });
        } else {
            notesList = notes.length !== 0 ? notes.map(note => {
            return(
                <NoteIndexItemForNotes
                    key={note.id}
                    note={note}
                    author={this.props.currentUser}
                    deleteNote={this.props.deleteNote}
                    updateNote={this.props.updateNote}
                    fetchNote={this.props.fetchNote}
                    openModal={this.props.openModal}
                    closeModal={this.props.closeModal}
                    updateNoteModal={this.props.updateNoteModal}
                    parentPath={this.props.location.pathname}
                    childPath={`notes/${note.id}`}
                    />
            );
        }) : <div className='no-notes'>&#160;&#160;No notes yet...</div>
        };

        return(
            <div className='notes-index-parent'>
                <div className='notes-header'>
                    <h1 className='notes-h1'>All Notes</h1>
                    <div className='other-header-elements'>
                        <p className='note-count'>{notes.length} notes</p>
                    </div>
                </div>
                <div className='list-container'>
                    <NotesModal/>
                    <ul className='notes-list'>
                            {notesList}
                    </ul>
                </div>
            </div>
        );
    }
};

export default withRouter(NotesIndex);