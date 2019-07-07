import React from 'react';
import NotebookListItem from './notebook_list_item';

class NoteBookList extends React.Component {
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
                <ul className='notebook-list'>
                    {notebookList}
                </ul> 
                <div className='tags'>
                    <div className='row'><h3><i className="fas fa-tag"></i><p className='tag-header'>&#160;&#160;&#160;Tags</p></h3></div>
                </div>

            </div>
        )
    }
};


export default NoteBookList;