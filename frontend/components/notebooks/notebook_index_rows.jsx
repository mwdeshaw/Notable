import React from 'react';
import NotebookIndexItem from './notebook_index_item';
import NotebookSearchBar from './notebook_search_bar';

class NotebookIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ""
        };
        this.setFilter = this.setFilter.bind(this);
    };

    componentDidMount() {
        this.props.fetchNotebooks();
    };

    setFilter(searchString) {
        this.props.setSearchFilter(searchString);
    };

    render() {

        let notebookList = [];
        if (this.props.searchString !== "" && this.props.searchString.length !== []) {
            notebookList = this.props.filteredNotebooks.map(notebook => {
                return (
                    <NotebookIndexItem
                        key={notebook.id}
                        notebook={notebook}
                        author={this.props.currentUser.email}
                        openModal={this.props.openModal}
                        deleteNotebook={this.props.deleteNotebook}
                    />
                );
            }
            );
        }
        else {

            notebookList = this.props.notebooks.map(notebook => {
                return (
                    <NotebookIndexItem
                        key={notebook.id}
                        notebook={notebook}
                        author={this.props.currentUser.email}
                        openModal={this.props.openModal}
                        deleteNotebook={this.props.deleteNotebook}
                    />
                )
            }
            );
        }

        return (
            <div className='notebook-index'>
                <div className='nb-index-header'>
                    <NotebookSearchBar setFilter={this.setFilter} />
                </div>
                <div className='nb-table-top'>
                    <h3 className='nb-lists'>My notebook list</h3>
                    <button className='create-nb-btn' onClick={() => this.props.openModal('create')}><i className="fas fa-book-medical"></i>&#160;&#160;New Notebook</button>
                </div>

                <div className='notebooks-table-parent'>
                    <div className='top-table-row'>
                        <div></div>
                        <div>TITLE</div>
                        <div>CREATED BY</div>
                        <div>UPDATED</div>
                        <div>ACTIONS</div>
                    </div>
                    <div className='notebooks-table-body'>
                        {notebookList}
                    </div>
                </div>
        </div>
        )
    }
};


export default NotebookIndex;