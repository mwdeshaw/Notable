import React from 'react';
import { withRouter } from 'react-router-dom';


class NoteIndexItemForNotebooks extends React.Component {
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
                return parseInt(path.slice(i+1));
            }
        }
    }

    handleModalSwitch(e) {
        e.preventDefault();
        const parentNote = this.props.notebook.notes[this.pathSlicer(this.props.location.pathname)];
        this.props.parentPath !== this.props.childPath ? 
            this.props.updateNote(parentNote)
            .then( () => { 
                this.props.closeModal()
                this.props.openModal(`nbNotesUpdate,${(this.props.note.id).toString()},${(this.props.notebookId).toString()}`)
            })
        : null
    }
    // handleModalSwitch(e) {
    //     e.preventDefault();
    //     const parentNote = this.props.notebook.notes[this.pathSlicer(this.props.location.pathname)];
    //     this.props.parentPath !== this.props.childPath ? this.props.updateNoteModal(parentNote) 
    //     .then( () => this.props.openModal(`nbNotesUpdate,${(this.props.note.id).toString()},${(this.props.notebookId).toString()}`))
    //     : null
    // }

    render() {


        return (
            <li onClick={this.handleModalSwitch} className='note-item'>
                {/* <li onClick={() => this.props.openModal(`nbNotesUpdate,${(this.props.note.id).toString()},${(this.props.notebookId).toString()}`)} className='note-item'> */}
                    <h3 className='note-title'>{this.props.note.title}</h3>
                    <p className='note-body-segment'>{this.props.note.body.slice(0, 30)}</p>
                    <p className='last-updated'>{this.props.note.updated_at.slice(0, 10)} ~ {this.sliceIdx(this.props.author.email)}</p>
                </li>
        );
    };
};

export default withRouter(NoteIndexItemForNotebooks);