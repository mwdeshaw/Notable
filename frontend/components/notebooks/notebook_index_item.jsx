import React from 'react';
import { Link, Route, withRouter,  } from 'react-router-dom';
import { obtainDay, obtainMonth, obtainYear } from '../../util/date_time_utils';

class NotebookIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openedActions: false
        }
        this.openActionsView = this.openActionsView.bind(this);
        this.closeActionsView = this.closeActionsView.bind(this);
        this.handleShowRedirect = this.handleShowRedirect.bind(this);
    };

    handleShowRedirect(e) {
        e.preventDefault();
        this.props.history.push(`/notebooks/${(this.props.notebook.id).toString()}`)
    };

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
                date = "Today";
            } else {
                date = `${month} ${day} ${year}`
            };

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
        <tr onClick={this.state.openedActions ? this.closeActionsView : null}>
                <th></th>
                <th onClick={this.handleShowRedirect}><i className="fas fa-book"></i>}&#160;&#160;&#160;<Link to={`/notebooks/${notebook.id}`}>{notebook.title}</Link></th>
                <th onClick={this.handleShowRedirect}>{author.slice(0, this.sliceIdx(author))}</th>
                <th onClick={this.handleShowRedirect}>{date}</th>
                <th>{this.state.openedActions ? detailedActionsView() : basicActionsView()}</th>
        </tr>
        );
    }
};

export default withRouter(NotebookIndexItem);