import React from 'react';
import { withRouter } from 'react-router-dom';
import NoteDetailContainerForNotebooks from '../notes/note_detail_container_for_notebooks';

class NoteIndexItemForNotebooks extends React.Component {
    constructor(props) {
        super(props);
        this.openDetailView = this.openDetailView.bind(this);
    };

    openDetailView(e) {
        e.preventDefault();
        <NoteDetailContainerForNotebooks
        
        />
    }

    render() {
        return (
            <li  className='note-item'>
                <h3 className='note-title'>{this.props.note.title}</h3>
                <p className='note-body-segment'>{this.props.note.body.slice(0, 30)}</p>
                <p className='last-updated'>{this.props.note.updated_at.slice(0, 10)}</p>
                <button onClick={() => deleteNote(this.props.note.id)}>Delete</button>
            </li>
        );
    };
};

export default withRouter(NoteIndexItemForNotebooks);