import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { updateNotebook, fetchNotebook } from '../../actions/notebooks';
import EditNotebookForm from './edit_notebook_form';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({ errors, session }) => {
    return {
        errors: errors.session,
        currentUser: session.currentUserId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateNotebook: notebook => dispatch(updateNotebook(notebook)),
        fetchNotebook: id => dispatch(fetchNotebook(id)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNotebookForm);