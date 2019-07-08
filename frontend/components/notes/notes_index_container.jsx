import { connect } from 'react-redux';
import { fetchNotes, deleteNote } from '../../actions/notes';
import { selectAllNotesByUpdated } from '../../reducers/selectors';
import NotesIndex from './notes_index';

const mapStateToProps = (state) => {
    return({
    currentUser: state.entities.users[state.session.currentUserId],
    notes: selectAllNotesByUpdated(state)
});
}

const mapDispatchToProps = dispatch => ({
    fetchNotes: () => dispatch(fetchNotes()),
    deleteNote: id => dispatch(deleteNote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);