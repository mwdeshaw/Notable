import React from 'react';

class NoteDetailForNotebooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.note.id,
            title: this.props.note.title,
            body: this.props.note.body,
            author_id: this.props.author.id,
            notebook_id: this.props.notebook.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateType = this.updateType.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateNote(this.state);
    };

    updateType(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        };
    };

    render() {
        return(
            <div className='note-detail-title'>
                <form className='edit-note-detail'>                    
                    <input type="text" className='note-detail-tite' value={this.state.title} onChange={this.updateType("title")} placeholder="Title" />
                    <textarea className='note-text' value={this.state.body} onChange={this.updateType("body")} placeholder="Start writing or choose a template"></textarea>

                    <div className='note-create-btn'>
                        <button id='create-note' onClick={this.handleSubmit}>update</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NoteDetailForNotebooks;