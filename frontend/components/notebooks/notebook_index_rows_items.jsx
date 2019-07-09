import React from 'react';
import { Link, Route, withRouter,  } from 'react-router-dom';
import NoteDropdownListContainer from './note_dropdown_list_container';

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
        
        const basicNotesView = () => (
            <div className='basic-notes-view'>
                <h3 className='notes-side-arrow' onClick={this.openNotesView}>▶︎</h3>
            </div>
        );
        
        const detailedNotesView = () => (
            <div className='detail-notes-view'>
                <h3 className='notes-down-arrow' onClick={this.closeNotesView}>▼</h3>
            </div>
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
        
    return(
        <div>
            <div className='row-parent' onClick={this.state.openedActions ? this.closeActionsView : null}>
                    <div>{this.state.openedNotes ? detailedNotesView() : basicNotesView()}</div>
                    <div onClick={this.handleShowRedirect} >{this.state.openedNotes ? <i className="fas fa-book-open"></i> : <i className="fas fa-book"></i>}&#160;&#160;&#160;<Link to={`/notebooks/${notebook.id}`}>{notebook.title}</Link></div>
                    <div onClick={this.handleShowRedirect}>{author.slice(0, this.sliceIdx(author))}</div>
                    <div onClick={this.handleShowRedirect}>{notebook.updated_at.slice(0, 10)}</div>
                    <div>{this.state.openedActions ? detailedActionsView() : basicActionsView()}</div>
            </div>
            {this.state.openedNotes ? <NoteDropdownListContainer notebook={notebook} /> : null}
        </div>
        );
    }
};

export default withRouter(NotebookIndexItem);