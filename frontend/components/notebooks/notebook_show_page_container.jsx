import { connect } from 'react-redux';
import { fetchNote, updateNote, deleteNote } from '../../actions/notes';
import { fetchNotebook } from '../../actions/notebooks';
import NotebookShowPage from './notebook_show_page';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    notebook: state.entities.notebooks[ownProps.match.params.notebookId]
});

const mapDispatchToProps = dispatch => ({
    fetchNotebook: id => dispatch(fetchNotebook(id)),
    updateNote: note => dispatch(updateNote(note)),
    fetchNote: id => dispatch(fetchNote(id)),
    deleteNote: id => dispatch(deleteNote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShowPage);