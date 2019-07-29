import React from 'react';
import { withRouter } from 'react-router-dom';

const styles = {
    searchButton: {
        margin: 10,
        cursor: 'pointer',
    }
}

class NoteSearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchString: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleNotesRedirect = this.handleNotesRedirect.bind(this);
    }

    update(event) {
        this.setState({ searchString: event.target.value })
        this.props.setFilter(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.setFilter(event.target.value);
    }

    handleNotesRedirect(e) {
        e.preventDefault();
        if (this.props.curPath !== "/notes") {
            this.props.history.push("/notes");
        };
    };

    render() {
        return (        
            <div className='search-container'>
                <form onSubmit={this.handleSubmit} onClick={this.handleNotesRedirect}>
                    <input type="text" placeholder="Search all notes..." className="search-input" value={this.state.searchString} onChange={this.update}/>
                    <span>
                        <button className='search-btn' type="submit" style={styles.searchButton}><i className="fa fa-search"></i></button>
                    </span>
                </form>
            </div>
        )};
}


export default withRouter(NoteSearchBar);