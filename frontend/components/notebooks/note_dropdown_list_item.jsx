import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { obtainYear, obtainMonth, obtainDay } from '../../util/date_time_utils';

class NoteDropdownListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openedActions: false
        }
        this.openActionsView = this.openActionsView.bind(this);
        this.closeActionsView = this.closeActionsView.bind(this);
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
        const year = obtainYear(this.props.note.updated_at).toString();
        const month = obtainMonth(this.props.note.updated_at).toString();
        const day = obtainDay(this.props.note.updated_at).toString();

        let date;
        if (day === "Yesterday") {
            date = "Yesterday";
        } else if (day === "Today") {
            date = today;
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
                    <li id='delete' onClick={() => this.props.deleteNote(note.id)}>Delete Note</li>
                </ul>
            </div>
        );

        return(
            <li>
                <Link to={`/notebooks/${this.props.notebookId}/notes/${this.props.note.id}`}> 
                    <i className="fas fa-book"></i>}&#160;&#160;&#160;{this.props.note.title}
                    {this.props.author.email.slice(0, this.sliceIdx(this.props.author.email))}
                    {date}
                </Link>
                {this.state.openedActions ? detailedActionsView() : basicActionsView()}
            </li>
        );
    }
}



export default withRouter(NoteDropdownListItem);