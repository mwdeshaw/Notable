import React from 'react';
import NotebookIndexItem from './notebook_index_item';
import { Route, Link } from 'react-router-dom';
import { selectAllNotebooks } from '../../reducers/selectors';


class NotebookIndex extends React.Component {
    componentDidMount() {
        this.props.fetchNotebooks();
    };
    
    // componentDidUpdate(prevProps) {
    //     if (prevProps.notebooks.length !== this.props.notebooks.length) {
    //         this.props.fetchNotebooks();
    //     }
    // };

    render() {
        // const { notebooks, errors, openModal, fetchNotebook, currentUser } = this.props;
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
                <h2>Notebooks</h2>
                
                <div className='top-top row'>
                    <h3>My notebook list</h3>
                    <button onClick={() => this.props.openModal('create')}>New Notebook</button>
                </div>

                <table>
                    <tbody>
                        <tr>
                            <th>TITLE</th>
                            <th>CREATED BY</th>
                            <th>UPDATED</th>
                        </tr>
                         {notebookList}
                    </tbody>
                </table>
            </div>
        )
    }


};


export default NotebookIndex;