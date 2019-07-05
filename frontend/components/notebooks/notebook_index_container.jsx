import { connect } from 'react-redux';
import { fetchNotebooks, deleteNotebook } from '../../actions/notebooks';
import { selectAllNotebooks } from '../../reducers/selectors';
import NotebookIndex from './notebook_index';


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    notebooks: selectAllNotebooks(state)
});

const mapDispatchToProps = dispatch => ({
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    deleteNotebook: id => dispatch(deleteNotebook(id)),
    fetchNotebook: id => dispatch(fetchNotebook(id)),
    updateNotebook: notebook => dispatch(updateNotebook(notebook))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);