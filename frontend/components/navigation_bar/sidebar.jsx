import React from 'react';
import NotebookListContainer from  './notebook_list_container';
import { Link, withRouter } from 'react-router-dom';

const styles = {
    searchButton: {
        margin: 10,
        cursor: 'pointer',
    }
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            logoutVisible: false
        };
        this.openView = this.openView.bind(this);
        this.closeView = this.closeView.bind(this);
        this.openLogout = this.openLogout.bind(this);
        this.closeLogout = this.closeLogout.bind(this);
        this.handleNotesRedirect = this.handleNotesRedirect.bind(this);
        this.handleNoteCreation = this.handleNoteCreation.bind(this);
    }

    handleNoteCreation(e) {
        //touch up with a rerender...
        e.preventDefault();
        const latestNotebook = this.props.notebooks[0];
        if (this.props.location.pathname.slice(0, 6) === `/notes`) {
            this.props.createNote({ title: "Untitled", body: "", author_id: this.props.currentUser.id, notebook_id: latestNotebook.id});
        } else if (this.props.location.pathname === '/notebooks') {
            this.props.history.push(`/notebooks/${latestNotebook.id}`)
            this.props.createNote({ title: "Untitled", body: "", author_id: this.props.currentUser.id, notebook_id: latestNotebook.id });
        } else {
            this.props.createNote({ title: "Untitled", body: "", author_id: this.props.currentUser.id, notebook_id: this.props.match.params.notebookId });
        }
    };

    handleNotesRedirect(e) {
        e.preventDefault();
        this.props.history.push("/notes")
    }

    openView(e) {
        e.preventDefault();
        this.setState({ visible: true })
    }

    closeView(e) {
        e.preventDefault();
        this.setState({ visible: false })
    }

    openLogout(e) {
        e.preventDefault();
        this.setState({ logoutVisible: true })
    }

    closeLogout(e) {
        e.preventDefault();
        this.setState({ logoutVisible: false })
    }

    render() {
        const basicView = () => (
            <div className='basic-view'>
                <div className='notebook-bar'>
                    <div className='row'><h3 className='arrow' onClick={this.openView}>▶︎&#160;&#160;&#160;</h3><Link to='/notebooks'><i className="fas fa-book"></i><h3 className='nb-header'>&#160;&#160;&#160;Notebooks</h3></Link></div>
                </div>
                <div className='tags'>
                    <div className className='row'><h3><i className="fas fa-tag"></i><p className='tag-header'>&#160;&#160;&#160;Tags</p></h3></div>
                </div>
            </div>
        );

        const detailedView = () => (      
            <div className='detail-modal'>
                <div className='notebook-bar'>
                    <div className='row'><h3 className='arrow' onClick={this.closeView}>▼&#160;&#160;&#160;</h3><Link to='/notebooks'><i className="fas fa-book-open"></i><h3 className='nb-header'>&#160;&#160;&#160;Notebooks</h3></Link></div>
                        <NotebookListContainer/>
                </div>
            </div>
        );

        const basicUserView = () => (
            <div className='basic-user-view'>
                <h3 className='notes-side-arrow' onClick={this.openLogout}>▼
                    ▶︎</h3>
            </div>
        );

        const detailedUserView = () => (
            <div className='detail-user-view'>
                <h3 className='notes-down-arrow' onClick={this.closeLogout}></h3>
                <button className='logout-btn' onClick={this.props.logout}>Sign out {this.props.currentUser.email}</button>

            </div>
        );


        return (
            <div className="sidenav">
                <div className='greeting-container'>
                <h1 className='greeting'><i className="fas fa-user-circle fa-2x"></i>&#160;&#160;&#160;{this.props.currentUser.email}</h1>
                </div>

                <div className='search-container'>
                    <input type="text" placeholder="Search all notes..." className="search-input" />
                    <span>
                        <button className='search-btn' type="submit" style={styles.searchButton}><i className="fa fa-search"></i></button>
                    </span>
                </div>

                <div className="side-buttons" onClick={this.handleNoteCreation}>
                    <button className='new-note'><i id="icon-new" className="fas fa-plus"></i> New Note</button>
                    <div className='right'>
                        <button className='mid-half'></button>
                        <button className='other-half'><i className="fas fa-chevron-down"></i></button>
                    </div>
                </div>
                <div onClick={this.handleNotesRedirect} className='all-notes'>
                    <div onClick={this.handleNotesRedirect} className='row'><h3><i className="fas fa-file-alt"></i><p className='nb-header'>&#160;&#160;&#160;All Notes</p></h3></div>
                </div>
                <div className='dropdowns'>
                    {this.state.visible ? detailedView() : basicView() }
                </div>
            </div>
       );
    };
 };

export default withRouter(Sidebar);