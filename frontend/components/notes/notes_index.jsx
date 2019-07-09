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
                    />
            );
        })
    
        return(
            <div className='notes-index-parent'>
                <div className='notes-header'>
                    <h2 className='notes-h2'>All Notes</h2>
                    <div className='notes-buttons'>
                        <button className='filter-tag'>Filter by tag</button> 
                    </div>
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