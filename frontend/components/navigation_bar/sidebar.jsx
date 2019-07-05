import React from 'react';
import NotebookListContainer from  './notebook_list_container';
import { Link } from 'react-router-dom';

const styles = {
    sidebar: {
        height: "100%",
        width: "10",
        position: "relative",
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: "#fff",
        overflowX: "hidden",
        padding: 20,
    },
    temp: {
        color: "white"
    },
    searchContainer: {
        fontSize: "3em",
        border: 'none',
    },
    searchButton: {
        margin: 10,
        cursor: 'pointer',
    },
    button: {
        backgroundColor: 'green',
        border: '1px solid green',
        textAlign: 'center',
        fontSize: "1em",
        textDecoration: 'none',
        fontFamily: 'sans-serif',
        cursor: 'pointer',
        borderRadius: "7px",
        padding: 10,
        color: 'white',
        marginTop: 20
    },
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
                <h3 className='side-arrow' onClick={this.openView}>▶︎</h3>
                <Link to='/notebooks'><h3 className='nb-header'>Notebooks</h3></Link>
            </div>
        );

        const detailedView = () => (
            <div className='detail-modal'>
                <h3 className='down-arrow' onClick={this.closeView}>▼</h3>
                <Link to='/notebooks'><h3 className='nb-header' >Notebooks</h3></Link>
                    <NotebookListContainer/>
            </div>
        );

        return (
            <div className="sidenav" style={styles.sidebar}>
                <h1 style={styles.temp}>{this.props.currentUser}</h1>
                <button onClick={this.props.logout}>Sign out {this.props.currentUser}</button>
                <div style={styles.searchContainer}>
                    <input type="text" placeholder="Search.." className="search" />
                    <button type="submit" style={styles.searchButton}><i className="fa fa-search"></i></button>
                </div>
                <div className='notebooks-dropdown'>
                    {this.state.visible ? detailedView() : basicView() }
                </div>
            </div>
       );
    };
 };

export default Sidebar;