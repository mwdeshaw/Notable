import React from 'react';

class NoteDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchNote(this.props.match.params.noteId);
        this.fetchNotebook(this.props.match.params.notebookId)
    };
    

    render() {
        return(
        <h1>Get all the deets</h1>
        )
    }
}

export default NoteDetail;