import { connect } from 'react-redux';
import { fetchNotes, deleteNote } from '../../actions/notes';
import { fetchNotebook } from '../../actions/notebooks';
import NoteDropdownList from './note_dropdown_list';


const mapStateToProps = (state, ownProps) => {
    const notebook = state.entities.notebooks[ownProps.notebook.id];
    const currentUser = state.entities.users[state.session.currentUserId];
    return { notebook, currentUser }
};

const mapDispatchToProps = dispatch => ({
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebook: id => dispatch(fetchNotebook(id)),
    deleteNote: noteId => dispatch(deleteNote(noteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteDropdownList);