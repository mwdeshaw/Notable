import { connect } from 'react-redux';
import { fetchNote, updateNote, deleteNote, createNote } from '../../actions/notes';
import { fetchNotebook } from '../../actions/notebooks';
import NotebookShowPage from './notebook_show_page';
import { openModal, closeModal, updateNoteModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return({
    currentUser: state.entities.users[state.session.currentUserId],
    notebook: state.entities.notebooks[ownProps.match.params.notebookId]
    });
};

const mapDispatchToProps = dispatch => ({
    fetchNotebook: id => dispatch(fetchNotebook(id)),
    updateNote: note => dispatch(updateNote(note)),
    fetchNote: id => dispatch(fetchNote(id)),
    deleteNote: id => dispatch(deleteNote(id)),
    createNote: note => dispatch(createNote(note)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    updateNoteModal: note => dispatch(updateNoteModal(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShowPage);