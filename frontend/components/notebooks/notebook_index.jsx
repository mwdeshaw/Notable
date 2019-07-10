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
                );
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

                <table className='notebooks-table'>
                    <thead className='top-table-row'>
                        <tr>
                            <th></th>
                            <th>TITLE</th>
                            <th>CREATED BY</th>
                            <th>UPDATED</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className='notebooks-table-body'>
                         {notebookList}
                    </tbody>
                </table>
            </div>
        )
    }
};


export default NotebookIndex;