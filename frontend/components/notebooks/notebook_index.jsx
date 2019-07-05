import React from 'react';
import NotebookIndexItem from './notebook_index_item';
import { Route, Link } from 'react-router-dom';
// import CreateNewNoteBookContainer from './create_new_notebook_container';
import CreateNoteBookContainer from '../modals/create_notebook_container';

class NotebookIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    componentDidMount() {
        this.props.fetchNotebooks();
    };

    render() {  
        if (!this.props.notebooks) {
            return '...loading'
        };


        return (
            <div className='notebook-index'>
                <h2>Notebooks</h2>
                
                <div className='top-top row'>
                    <h3>My notebook list</h3>
                    <button onClick={() => this.props.openModal('create')}>New Notebook</button>

                    {/* <button><Link to="notebooks/new">New Notebook</Link></button> */}
                </div>

                <table>
                    <tbody>
                        <tr>
                            <th>TITLE</th>
                            <th>CREATED BY</th>
                            <th>UPDATED</th>
                        </tr>
                        {this.props.notebooks.map(notebook => <NotebookIndexItem key={notebook.id} notebook={notebook} author={this.props.currentUser.email} 
                            updateNotebook={this.props.updateNotebook} fetchNotebook={this.props.fetchNotebook}/>)}
                    </tbody>
                </table>
            </div>
        )
    }


};


export default NotebookIndex;