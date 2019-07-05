import React from 'react';
import NotebookIndexItem from './notebook_index_item';
import { Route, Link } from 'react-router-dom';
import CreateNewNoteBookContainer from './create_new_notebook_container';

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
            return null;
        }

        return (
            <div className='notebook-index'>
                <h2>Notebooks</h2>
                
                <div className='top-top row'>
                    <h3>My notebook list</h3>
                    
                </div>

                <table>
                    <tbody>
                        <tr>
                            <th>TITLE</th>
                            <th>CREATED BY</th>
                            <th>UPDATED</th>
                        </tr>
                        {this.props.notebooks.map(notebook => <NotebookIndexItem key={notebook.id} notebook={notebook} author={this.props.currentUser.email} 
                        updateNotebook={this.props.updateNotebook}/>)}
                    </tbody>
                </table>
            </div>
        )
    }


};


export default NotebookIndex;