import { connect } from 'react-redux';
import { fetchNotebooks, deleteNotebook } from '../../actions/notebooks';
import { selectAllNotebooksByUpdated } from '../../reducers/selectors';
import NotebookIndex from './notebook_index';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    notebooks: selectAllNotebooksByUpdated(state)
});

const mapDispatchToProps = dispatch => ({
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    deleteNotebook: id => dispatch(deleteNotebook(id)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);