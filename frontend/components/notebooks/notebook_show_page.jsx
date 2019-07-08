import React from 'react';
import NavigationBarContainer from '../navigation_bar/navigation_bar_container';
import NoteIndexItem from '../notes/note_index_item';


class NotebookShowPage extends React.Component {
    componentDidMount() {
        this.props.fetchNotebook(this.props.match.params.notebookId)
        .then(() => {
            this.props.history.push(`/notebooks/${this.props.notebook.id}/notes/${this.props.notebook.noteIds[-1]}`)    
        });
    };

        
    render() {
        const { notebook } = this.props;
        
        if (!notebook) {
            return (
                <div>Loading...</div>
            )
        };

        let notesList;
        if (!notebook.notes) {
            notesList = 'No notes yet :('
        }
        else { 
         notesList = Object.values(notebook.notes).map(note => {
            return(
                <NoteIndexItem
                    key={note.id}
                    note={note}
                    author={this.props.currentUser.email}
                    deleteNote={this.props.deleteNote}
                    updateNote={this.props.updateNote}
                    fetchNote={this.props.fetchNote}
                />
                )
            });
        }

        return(
            <div className='nb-show-parent'>
                <div className='notebook-header'>
                    <h1>{notebook.title}</h1>
                    <p>{notebook.noteIds.length} notes</p>
                </div>
                <NavigationBarContainer />

                <ul className='notebook-notes-list'>
                    {notesList}
                </ul>
            </div>
        );
    }
};

export default NotebookShowPage;