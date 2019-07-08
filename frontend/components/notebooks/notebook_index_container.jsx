import { connect } from 'react-redux';
import { fetchNotebooks, deleteNotebook } from '../../actions/notebooks';
import { selectAllNotebooksByUpdated, selectFilteredNotebooks } from '../../reducers/selectors';
import { setSearchFilter, resetSearchFilter } from '../../actions/notebook_filters';
import NotebookIndex from './notebook_index';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    notebooks: selectAllNotebooksByUpdated(state),
    filteredNotebooks: selectFilteredNotebooks(selectAllNotebooksByUpdated(state), state.ui.searchString),
    searchString: state.ui.searchString
});

const mapDispatchToProps = dispatch => ({
    setSearchFilter: searchString => dispatch(setSearchFilter(searchString)),
    resetSearchFilter: () => dispatch(resetSearchFilter()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    deleteNotebook: id => dispatch(deleteNotebook(id)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);