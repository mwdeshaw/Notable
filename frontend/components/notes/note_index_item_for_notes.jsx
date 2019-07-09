import React from 'react';
import { withRouter } from 'react-router-dom';

class NoteIndexItemForNotes extends React.Component {
    constructor(props) {
        super(props);
    };

    sliceIdx(str) {
        let idx = str.indexOf("@");
        return str.slice(0, idx)
    };

    render() {    
        return(
            <li onClick={() => this.props.openModal(`nbNotesUpdate,${(this.props.note.id).toString()},${(this.props.note.notebook_id).toString()}`)} className='note-item'>
                <h3 className='note-title'>{this.props.note.title}</h3>
                <p className='note-body-segment'>{this.props.note.body.slice(0, 30)}</p>
                <p className='last-updated'>{this.props.note.updated_at.slice(0, 10)} ~ {this.sliceIdx(this.props.author.email)}</p>
            </li>
        );
    };
};

export default withRouter(NoteIndexItemForNotes);