import React from 'react';
import AddNotebooksModal from '../modals/add_notebooks_modal';

const styles = {
    sidebar: {
        height: "100%",
        width: "10",
        position: "relative",
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: "#111",
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
        this.state = { isOpen: false }
        this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <div className="sidenav" style={styles.sidebar}>
                <h1 style={styles.temp}>{this.props.currentUser}</h1>
                <button onClick={this.props.logout}>Sign out {this.props.currentUser}</button>
                <div style={styles.searchContainer}>
                    <input type="text" placeholder="Search.." className="search" />
                    <button type="submit" style={styles.searchButton}><i className="fa fa-search"></i></button>
                </div>
                <button type="button" onClick={() => this.toggleModal()} style={styles.button}>Create Notebook</button>
                <AddNotebooksModal show={this.state.isOpen} onClose={() => this.toggleModal()} />

            </div>
        );
    }
};

export default Sidebar;