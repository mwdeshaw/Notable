import { connect } from 'react-redux';
import { fetchNote, deleteNote, updateNote } from '../../actions/notes';
import { fetchNotebook } from '../../actions/notebooks';
import NoteDetailForNotebooks from './note_detail_for_notebooks';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const notebook = state.entities.notebooks[ownProps.notebookId];
    return {
        currentUser: state.session.currentUserId,
        note: notebook.notes[ownProps.noteId],
        notebook: notebook
    };
};


const mapDispatchToProps = dispatch => ({
    fetchNote: noteId => dispatch(fetchNote(noteId)),
    fetchNotebook: notebookId => dispatch(fetchNotebook(notebookId)),
    deleteNote: noteId => dispatch(deleteNote(noteId)),
    updateNote: note => dispatch(updateNote(note)),
    closeModal: () => dispatch(closeModal()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetailForNotebooks);