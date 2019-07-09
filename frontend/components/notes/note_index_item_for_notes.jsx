import React from 'react';
import { withRouter } from 'react-router-dom';

class NoteIndexItemForNotes extends React.Component {
    constructor(props) {
        super(props);
        this.handleModalSwitch = this.handleModalSwitch.bind(this);
    };

    sliceIdx(str) {
        let idx = str.indexOf("@");
        return str.slice(0, idx)
    };

    pathSlicer(path) {
        let slashCount = 0;
        for (let i = 0; i < path.length; i++) {

            if (path[i] === "/") {
                slashCount += 1
            }
            if (slashCount === 4) {
                return parseInt(path.slice(i + 1));
            }
        }
    }

    handleModalSwitch(e) {   
        e.preventDefault();
        this.props.parentPath !== this.props.childPath ?
            this.props.fetchNote(this.props.note.id)
                .then(() => {
                    this.props.closeModal()
                    this.props.openModal(`nbNotesUpdate,${(this.props.note.id).toString()},${(this.props.note.notebook_id).toString()}`)
            }) : null
    }

    render() {    
        return(
            <li onClick={this.handleModalSwitch} className='note-item'>
                <h3 className='note-title'>{this.props.note.title}</h3>
                <p className='note-body-segment'>{this.props.note.body.slice(0, 30)}</p>
                <p className='last-updated'>{this.props.note.updated_at.slice(0, 10)} ~ {this.sliceIdx(this.props.author.email)}</p>
            </li>
        );
    };
};

export default withRouter(NoteIndexItemForNotes);