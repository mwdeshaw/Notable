import React from 'react';

class NoteDetailForNotes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNote(this.props.match.params.noteId);
        this.props.fetchNotebook(this.props.match.params.notebookId)
    };


    render() {
        return (
            <h1>Get all the deets</h1>
        )
    }
}

export default NoteDetailForNotes;