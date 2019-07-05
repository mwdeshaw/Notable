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

        this.openSesame = this.openSesame.bind(this);
        this.closeSesame = this.closeSesame.bind(this);
    }

    openSesame(e) {
        e.preventDefault()
        this.setState({ visible: true })
    };

    closeSesame(e) {
        e.preventDefault()
        this.setState({ visible: false })
    };

    componentDidMount() {
        this.props.fetchNotebooks();
    };

    componentDidUpdate(prevProps) {
        if (prevProps.notebooks.length !== this.props.notebooks.length)
        this.props.fetchNotebooks();
    }

    render() {  
        if (!this.props.notebooks) {
            return null;
        }

        return (
            <div className='notebook-index'>
                <h2>Notebooks</h2>
                
                <div className='top-top row'>
                    <h3>My notebook list</h3>
                    
                    <Link to="/notebooks/new"><button className='create-button'>New notebook </button></Link>
                        <Route path="/notebooks/new" component={CreateNewNoteBookContainer}/>
                </div>

                <table>
                    <tbody>
                        <tr>
                            <th>TITLE</th>
                            <th>CREATED BY</th>
                            <th>UPDATED</th>
                            <th>ACTIONS</th>
                        </tr>
                        {this.props.notebooks.map(notebook => <NotebookIndexItem key={notebook.id} notebook={notebook} author={this.props.currentUser.email} />)}
                    </tbody>
                </table>
            </div>
        )
    }


};


export default NotebookIndex;