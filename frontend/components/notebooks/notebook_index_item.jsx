import React from 'react';
import { Link, Route } from 'react-router-dom';

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
        const { notebook, author, openModal, deleteNotebook } = this.props

        const basicNotesView = () => (
            <div className='basic-notes-view'>
                <h3 className='notes-side-arrow' onClick={this.openNotesView}>▶︎</h3>
            </div>
        );

        const detailedNotesView = () => (
            <div className='detail-notes-view-modal'>
                <h3 className='notes-down-arrow' onClick={this.closeNotesView}>▼</h3>
                Notes will go here   
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
                <ul className='actions-dropdown' >
                    <li onClick={() => deleteNotebook(notebook.id)}>Delete Notebook</li>
                    <li onClick={() => openModal(`edit${(notebook.id).toString()}`)}>Edit Notebook Title</li>
                </ul>
            </div>
        );

    return(
        <tr>
                <th>{this.state.openedNotes ? detailedNotesView() : basicNotesView()}</th>
                <th onClick={this.closeActionsView}><Link to={`/notebooks/${notebook.id}`}>{notebook.title}</Link></th>
                <th onClick={this.closeActionsView}><Link to={`/notebooks/${notebook.id}`}>{author.slice(0, this.sliceIdx(author))}</Link></th>
                <th onClick={this.closeActionsView}><Link to={`/notebooks/${notebook.id}`}>{notebook.updated_at.slice(0, 10)}</Link></th>
                <th>{this.state.openedActions ? detailedActionsView() : basicActionsView()}</th>
        </tr>
        );
    }
};

export default NotebookIndexItem;