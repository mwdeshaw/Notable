import { connect } from 'react-redux';
import { logout } from  '../../actions/session';
import { fetchNotebooks, createNotebook } from  '../../actions/notebooks';
import { createNote } from  '../../actions/notes';
import { clearErrors } from '../../actions/session';
import { selectAllNotebooksByUpdated, selectAllNotesByUpdated } from  '../../reducers/selectors';
import NavigationBar from './navigation_bar'
import { openModal } from '../../actions/modal_actions';
import { setSearchFilter, resetSearchFilter } from '../../actions/notebook_filters';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    notebooks: selectAllNotebooksByUpdated(state),
    lastNote: selectAllNotesByUpdated(state)[0]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    createNote: note => dispatch(createNote(note)),
    createNotebook: notebook => dispatch(createNotebook(notebook)),
    openModal: (modal) => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors()),
    setSearchFilter: searchString => dispatch(setSearchFilter(searchString)),
    resetSearchFilter: () => dispatch(resetSearchFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);