import React from 'react';

class NotesIndex extends React.Component {
    componentDidMount() {
        this.props.fetchNotes();
    };
};

export default NotesIndex;