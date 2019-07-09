import React from 'react';
import { Link, Route, withRouter,  } from 'react-router-dom';
// import NoteDropdownListContainer from './note_dropdown_list_container';
import { obtainDay, obtainMonth, obtainYear } from '../../util/date_time_utils';

class NotebookIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openedNotes: false,
            openedActions: false
        }
        this.openNotesView = this.openNotesView.bind(this);
        this.closeNotesView = this.closeNotesView.bind(this);
        this.openActionsView = this.openActionsView.bind(this);
        this.closeActionsView = this.closeActionsView.bind(this);
        this.handleShowRedirect = this.handleShowRedirect.bind(this);
    };

    handleShowRedirect(e) {
        e.preventDefault();
        this.props.history.push(`/notebooks/${(this.props.notebook.id).toString()}`)
    };

    openNotesView(e) {
        e.preventDefault();
        this.setState({ openedNotes: true })
    };

    closeNotesView(e) {
        e.preventDefault();
        this.setState({ openedNotes: false })
    }

    openActionsView(e) {
        e.preventDefault();
        this.setState({ openedActions: true })
    };

    closeActionsView(e) {
        e.preventDefault();
        this.setState({ openedActions: false })
    }

    sliceIdx(str) {
        return str.indexOf("@");
    };

    render() {
        const { notebook, author, openModal, deleteNotebook } = this.props;

        const year = obtainYear(this.props.notebook.updated_at).toString();
        const month = obtainMonth(this.props.notebook.updated_at).toString();
        const day = obtainDay(this.props.notebook.updated_at).toString();

        let date;
            if (day === "Yesterday") {
                date = "Yesterday";
            } else if (day === "Today") {
                date = today;
            } else {
                date = `${month} ${day} ${year}`
            };

        const basicNotesView = () => (
            <div className='basic-notes-view'>
                <h3 className='notes-side-arrow' onClick={this.openNotesView}>▶︎</h3>
            </div>
        );
        
        const detailedNotesView = () => (
            <h3 className='notes-down-arrow' onClick={this.closeNotesView}>▼</h3>
        );

        const basicActionsView = () => (
            <div className='basic-actions-view'>
                <h3 className='actions-button' onClick={this.openActionsView}><i className="fa fa-bars"></i></h3>
            </div>
        );

        const detailedActionsView = () => (
            <div className='detail-actions-view-modal'>
                <h3 className='actions-button' onClick={this.closeActionsView}><i className="fa fa-bars"></i></h3>
                <ul onClick={this.closeActionsView} className='actions-dropdown'>
                    <i id='close-actions' className="fas fa-times" onClick={this.closeActionsView}></i>
                    <li className='actions'>Actions</li>
                    <li id='delete' onClick={() => deleteNotebook(notebook.id)}>Delete Notebook</li>
                    <li id = 'edit' onClick={() => openModal(`edit${(notebook.id).toString()}`)}>Rename Notebook</li>
                </ul>
            </div>
        );

        // const notesDropdown = () => {
        //     const notes = notebook.notes;
        //     if (!notes) {
        //         return <ul>No notes yet</ul>
        //     } else {
        //         const notesList = 
        //         })
        //         return notesList;
        //     }
        // }
        
    return(
        <tr onClick={this.state.openedActions ? this.closeActionsView : null}>
                <th>{this.state.openedNotes ? detailedNotesView() : basicNotesView()}</th>
                <th onClick={this.handleShowRedirect}>{this.state.openedNotes ? <i className="fas fa-book-open"></i> : <i className="fas fa-book"></i>}&#160;&#160;&#160;<Link to={`/notebooks/${notebook.id}`}>{notebook.title}</Link></th>
            {/* <th className='hidden'>{this.state.openedNotes && notebook.notes ?
                    Object.values(this.props.notebook.notes).reverse().map(note => {
                        return( 
                    <li
                    key ={note.id}>
                        note.title
                        author.slice(0, this.sliceIdx(author))
                    </li>
                    )})
                    : <li>No notes yet</li>
                }</th> */}
                <th onClick={this.handleShowRedirect}>{author.slice(0, this.sliceIdx(author))}</th>
                <th onClick={this.handleShowRedirect}>{date}</th>
                <th>{this.state.openedActions ? detailedActionsView() : basicActionsView()}</th>
        </tr>
        );
    }
};

export default withRouter(NotebookIndexItem);