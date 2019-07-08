import React from 'react';
import NoteIndexItem from './note_index_item';
import { withRouter } from 'react-router-dom';

class NotesIndex extends React.Component {
    componentDidMount() {
        this.props.fetchNotes()
            .then(() => this.props.history.push(`/notes/${this.props.notes[0].id}`))
    };

    render() {
        const allNotes = this.props.notes.map(note => {
            return(
                <NoteIndexItem
                    key={note.id}
                    note={note}
                    author={this.props.currentUser.email}
                    deleteNote={this.props.deleteNote}
                    />
            )
        })
    
        return(
            <div className='notes-index-parent'>
                <div className='notes-header'>
                    <h2 className='notes-h2'>All Notes</h2>
                    <div className='notes-buttons'>
                        <button className='filter-tag'>Filter by tag</button> 
                    </div>
                    <ul className='notes-list'>
                        {allNotes}
                    </ul>
                </div>
            </div>
        );
    }
};

export default withRouter(NotesIndex);