import { connect } from 'react-redux';
import { fetchNote, deleteNote, updateNote } from '../../actions/notes';
import { fetchNotebook } from '../../actions/notebooks';
import { selectAllNotesByUpdated } from '../../reducers/selectors';
import NoteDetail from './note_detail';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {  
    const notebook = state.entities.notebooks[ownProps.notebookId];
    const notesArr = selectAllNotesByUpdated(state);
    const lastNote = notesArr[0];
    return {
        currentUser: state.session.currentUserId,
        note: notebook.notes[ownProps.noteId] || lastNote,
        notebook: notebook
    };
};


const mapDispatchToProps = dispatch => ({
    fetchNote: noteId => dispatch(fetchNote(noteId)),
    fetchNotebook: notebookId => dispatch(fetchNotebook(notebookId)),
    deleteNote: noteId => dispatch(deleteNote(noteId)),
    updateNote: note => dispatch(updateNote(note)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);