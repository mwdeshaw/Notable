// import { connect } from 'react-redux';
// import { fetchNote, deleteNote, updateNote, fetchNotes } from '../../actions/notes';
// import { fetchNotebook } from '../../actions/notebooks';
// import NoteDetailForNotes from './note_detail_for_notes';

// const mapStateToProps = (state, ownProps) => {
//     const note = ownProps.note;
//     const notebook = state.entities.notebooks[ownProps.notebookId];
//     return { note, notebook }
// };

// const mapDispatchToProps = dispatch => ({
//     fetchNote: noteId => dispatch(fetchNote(noteId)),
//     fetchNotebook: notebookId => dispatch(fetchNotebook(notebookId)),
//     deleteNote: noteId => dispatch(deleteNote(noteId)),
//     updateNote: note => dispatch(updateNote(note))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(NoteDetailForNotes);