import React from 'react';
import { withRouter } from 'react-router-dom';

class NoteIndexItem extends React.Component {
    constructor(props) {
        super(props);
        // this.getToDetailedView = this.getToDetailedView.bind(this); 
    };

    sliceIdx(str) {
        return str.indexOf("@");
    };

    // getToDetailedView(e) {
    //     e.preventDefault();
    //     this.props.history.push(`/notes/${this.props.note.id}`)
    // }

    render() {
        const { note, author, deleteNote } = this.props;
    
        return(
            // onClick={this.getToDetailedView}
            <li  className ='note-item'>
                <h3 className='note-title'>{note.title}</h3>
                <p className='note-body-segment'>{note.body}</p> 
                <p className='last-updated'>{note.updated_at.slice(0, 10)} ~ {author.slice(0, this.sliceIdx(author))}</p>
                <button onClick={() => deleteNote(note.id)}>Delete</button>
            </li>
        );
    };
};

export default withRouter(NoteIndexItem);