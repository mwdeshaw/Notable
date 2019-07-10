import React from 'react';
import { withRouter } from 'react-router-dom';
import { obtainYear, obtainMonth, obtainDay } from '../../util/date_time_utils';

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
        this.props.parentPath !== this.props.childPath ? 
            this.props.fetchNote(this.props.note.id)
            .then( () => { 
                this.props.closeModal()
                this.props.openModal(`nbNotesUpdate,${(this.props.note.id).toString()},${(this.props.notebookId).toString()}`)
            })
        : null
    }

    render() {
        const year = obtainYear(this.props.note.updated_at).toString();
        const month = obtainMonth(this.props.note.updated_at).toString();
        const day = obtainDay(this.props.note.updated_at).toString();

        let date;
        if (day === "Yesterday") {
            date = "Yesterday";
        } else if (day === "Today") {
            date = "Today";
        } else {
            date = `${month} ${day} ${year}`
        };

        return (
            <li onClick={this.handleModalSwitch} className='note-item'>
                    <h3 className='note-title'>{this.props.note.title}</h3>
                    <p className='note-body-segment'>{this.props.note.body.slice(0, 30)}</p>
                    <h4 className='last-updated'>{date}</h4>
                </li>
            );
    };
};

export default withRouter(NoteIndexItemForNotebooks);