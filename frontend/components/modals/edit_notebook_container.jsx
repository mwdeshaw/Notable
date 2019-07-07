import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { updateNotebook, fetchNotebook } from '../../actions/notebooks';
import EditNotebookForm from './edit_notebook_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        currentUser: state.session.currentUserId,
        notebook: state.entities.notebooks[ownProps.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateNotebook: notebook => dispatch(updateNotebook(notebook)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
        fetchNotebook: id => dispatch(fetchNotebook(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNotebookForm);