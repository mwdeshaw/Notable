import React from 'react';
import NoteIndexItemForNotes from './note_index_item_for_notes';
import { withRouter } from 'react-router-dom';
import NotesModal from '../modals/notes_modal';

class NotesIndex extends React.Component {
    componentDidMount() {
        this.props.fetchNotes()
            .then(() => {
                this.props.history.push(`/notes/${this.props.notes[0].id}`)
                this.props.openModal(`nbNotesUpdate,${this.props.notes[0].id},${this.props.notes[0].notebook_id}`)
            })
    };

    render() {
        const allNotes = this.props.notes.map(note => {
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
        })
    
        return(
            <div className='notes-index-parent'>
                <div className='notes-header'>
                    <h1 className='notes-h1'>All Notes</h1>
                    <div className='other-header-elements'>
                        <p className='note-count'>{allNotes.length} notes</p>
                        <button className='filter-tag'><i className="fas fa-tags fa-lg"></i></button> 
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