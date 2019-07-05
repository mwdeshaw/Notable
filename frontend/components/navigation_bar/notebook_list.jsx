import React from 'react';
import NotebookListItem from './notebook_list_item';

class NotebookIndex extends React.Component {
    componentDidMount() {
        this.props.fetchNotebooks();
    };

    render() {
        const { notebooks } = this.props;
        const notebookList = notebooks.map(notebook => (
            <NotebookListItem
                key={notebook.id}
                notebook={notebook}
            />
            )
        );

        return (
            <div className='notebook-list-container'>
                <ul className='notebooks-list'>
                    {notebookList}
                </ul> 
            </div>
        )
    }
};


export default NotebookIndex;