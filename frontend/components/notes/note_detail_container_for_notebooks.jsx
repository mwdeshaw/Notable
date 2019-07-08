import { connect } from 'react-redux';
import { fetchNote, deleteNote, updateNote, fetchNotes } from '../../actions/notes';
import { fetchNotebook } from '../../actions/notebooks';
import NoteDetail from './note_detail_for_notebooks';

const mapStateToProps = ({ notebook, note }) => {
    return( {
    notebook,
    note
})};

const mapDispatchToProps = dispatch => ({
    fetchNote: noteId => dispatch(fetchNote(noteId)),
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebook: notebookId => dispatch(fetchNotebook(notebookId)),
    deleteNote: noteId => dispatch(deleteNote(noteId)),
    updateNote: note => dispatch(updateNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);