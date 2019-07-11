import { connect } from 'react-redux';
import { logout } from  '../../actions/session';
import { fetchNotebooks, createNotebook } from  '../../actions/notebooks';
import { createNote } from  '../../actions/notes';
import { selectAllNotebooksByUpdated, selectAllNotesByUpdated } from  '../../reducers/selectors';
import NavigationBar from './navigation_bar'
import { openModal } from '../../actions/modal_actions';

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
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);