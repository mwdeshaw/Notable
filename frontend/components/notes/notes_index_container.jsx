import { connect } from 'react-redux';
import { fetchNotes, deleteNote, fetchNote, updateNote } from '../../actions/notes';
import { selectAllNotesByUpdated } from '../../reducers/selectors';
import NotesIndex from './notes_index';
import { openModal, closeModal } from '../../actions/modal_actions';
//import { selectAllNotebooksByUpdated, selectFilteredNotebooks } from '../../reducers/selectors';
//import { setSearchFilter, resetSearchFilter } from '../../actions/notebook_filters'

const mapStateToProps = (state) => {
    return({
        currentUser: state.entities.users[state.session.currentUserId],
        notes: selectAllNotesByUpdated(state),
        // filteredNotes: selectFilteredNotes(selectAllNotesByUpdated(state), state.ui.searchString),
        lastNote: selectAllNotesByUpdated(state)[0]
        // searchString: state.ui.searchString
    })
}

const mapDispatchToProps = dispatch => ({
    // setSearchFilter: searchString => dispatch(setSearchFilter(searchString)),
    // resetSearchFilter: () => dispatch(resetSearchFilter()),
    fetchNotes: () => dispatch(fetchNotes()),
    deleteNote: id => dispatch(deleteNote(id)),
    fetchNote: id => dispatch(fetchNote(id)),
    updateNote: note => dispatch(updateNote(note)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);