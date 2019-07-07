import React from 'react';
import NotebookIndexItem from './notebook_index_item';
import { Route, Link } from 'react-router-dom';


class NotebookIndex extends React.Component {
    componentDidMount() {
        this.props.fetchNotebooks();
    };

    render() {
        const notebookList = this.props.notebooks.map(notebook => {
            return (
            <NotebookIndexItem
                key={ notebook.id }
                notebook={ notebook }
                author={this.props.currentUser.email} 
                openModal={this.props.openModal}
                deleteNotebook={this.props.deleteNotebook}
                />
            )
        }
        );

        return (
            <div className='notebook-index'>
                <div className='nb-index-header'>
                    <h2>Notebooks</h2>
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