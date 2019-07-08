import React from 'react';
import NoteDetailContainerForNotebooks from '../notes/note_detail_container_for_notebooks';

class NoteIndexItemForNotebooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailOpened: false
        };
        this.openDetailView = this.openDetailView.bind(this);
    };

    openDetailView(e) {
        e.preventDefault();
        this.setState({ detailOpened: true });
    };

    sliceIdx(str) {
       let idx = str.indexOf("@");
        return str.slice(0, idx)
    };

    render() {
        const detailView = <NoteDetailContainerForNotebooks
                    key={this.props.note.id}
                    note={this.props.note}
                    author={this.props.author}
                    notebookId={this.props.notebookId}
                    deleteNote={this.props.deleteNote}
                    updateNote={this.props.updateNote}
                    fetchNote={this.props.fetchNote}
                />

        return (
            <div className='note-index-item-plus-detail'>
                <li onClick={this.openDetailView} className='note-item'>
                    <h3 className='note-title'>{this.props.note.title}</h3>
                    <p className='note-body-segment'>{this.props.note.body.slice(0, 30)}</p>
                    <p className='last-updated'>{this.props.note.updated_at.slice(0, 10)} ~ {this.sliceIdx(this.props.author.email)}</p>
                    <div className='note-detail-containment-area'>
                        {this.state.detailOpened ? detailView : null}
                    </div>
                </li>
            </div>
        );
    };
};

export default NoteIndexItemForNotebooks;