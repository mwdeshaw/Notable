import React from 'react';
import NoteIndexItemForNotes from './note_index_item_for_notes';
import { withRouter } from 'react-router-dom';
import NotesModal from '../modals/notes_modal';

class NotesIndex extends React.Component {

    componentDidMount() {
        this.props.fetchNotes()
            .then(() => {
                const that = this;                
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
        const notes = this.props.notes;
        const allNotes = notes.length !== 0 ?
        notes.map(note => {
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
        }) : <div>&#160;&#160;No notes yet...</div>

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
                        {allNotes}
                    </ul>
                </div>
            </div>
        );
    }
};

export default withRouter(NotesIndex);