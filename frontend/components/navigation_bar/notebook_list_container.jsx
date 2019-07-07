import { connect } from 'react-redux';
import { fetchNotebooks } from '../../actions/notebooks';
import { selectAllNotebooksByUpdated } from '../../reducers/selectors';
import NoteBookList from './notebook_list';


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    notebooks: selectAllNotebooksByUpdated(state)
});

const mapDispatchToProps = dispatch => ({
    fetchNotebooks: () => dispatch(fetchNotebooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteBookList);