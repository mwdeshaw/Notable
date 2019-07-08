import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { createNote } from '../../actions/notes';
import CreateNoteForm from './create_note_form';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.currentUserId,
        notebookId: ownProps.notebookId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createNote: note => dispatch(createNote(note)),
        clearErrors: () => dispatch(clearErrors()),
        fetchNotebook: id => dispatch(fetchNotebook(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNoteForm);