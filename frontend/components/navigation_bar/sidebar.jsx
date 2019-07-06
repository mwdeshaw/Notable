import React from 'react';
import NotebookListContainer from  './notebook_list_container';
import { Link } from 'react-router-dom';

const styles = {
    searchContainer: {
        fontSize: "3em",
        border: 'none',
    },
    searchButton: {
        margin: 10,
        cursor: 'pointer',
    }
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.openView = this.openView.bind(this);
        this.closeView = this.closeView.bind(this);
    }

    openView(e) {
        e.preventDefault();
        this.setState({ visible: true })
    }

    closeView(e) {
        e.preventDefault();
        this.setState({ visible: false })
    }

    render() {
        const basicView = () => (
            <div className='basic-view'>
                <h3 className='arrow' onClick={this.openView}>▶︎</h3>
                <div className='notebook-bar'>
                <Link to='/notebooks'><i className="fas fa-book"></i><h3 className='nb-header'>Notebooks</h3></Link>
                </div>
            </div>
        );

        const detailedView = () => (
            <div className='detail-modal'>
                <h3 className='arrow' onClick={this.closeView}>▼</h3>
                <Link to='/notebooks'><h3 className='nb-header'>Notebooks</h3></Link>
                    <NotebookListContainer/>
            </div>
        );

        return (
            <div className="sidenav">
                <h1 className='greeting'>{this.props.currentUser}</h1>
                <button className='logout-btn' onClick={this.props.logout}>Sign out {this.props.currentUser}</button>
                <button className='new-note'>New Note</button>
                <div style={styles.searchContainer}>
                    <input type="text" placeholder="Search.." className="search" />
                    <button type="submit" style={styles.searchButton}><i className="fa fa-search"></i></button>
                </div>
                <div className='dropdowns'>
                    {this.state.visible ? detailedView() : basicView() }
                </div>
            </div>
       );
    };
 };

export default Sidebar;