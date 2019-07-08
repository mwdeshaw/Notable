import { connect } from 'react-redux';
import { fetchNotes, deleteNote } from '../../actions/notes';
import { selectAllNotesByUpdated } from '../../reducers/selectors';
import NotesIndex from './notes_index';
// import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return({
    currentUser: state.entities.users[state.session.currentUserId],
    notes: selectAllNotesByUpdated(state)
});
}

const mapDispatchToProps = dispatch => ({
    fetchNotes: () => dispatch(fetchNotes()),
    deleteNote: id => dispatch(deleteNote(id))
    // openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);