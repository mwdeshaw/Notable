import React from 'react';

const styles = {
    searchButton: {
        margin: 10,
        cursor: 'pointer',
    }
}

class NotebookSearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchString: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(event) {
        this.setState({ searchString: event.target.value })
        this.props.setFilter(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.setFilter(event.target.value);
    }

    render() {
        return (
            <div className='nb-search-container'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Find notebooks..." className="nb-search-input" value={this.state.searchString} onChange={this.update} />
                    <span>
                        <button className='nb-search-btn' type="submit" style={styles.searchButton}><i className="fa fa-search"></i></button>
                    </span>
                </form>
            </div>
        )
    }
}


export default NotebookSearchBar;