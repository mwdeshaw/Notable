import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { createNotebook } from '../../actions/notebooks';
import CreateNotebookForm from './create_notebook_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({ errors, session }) => {
    return {
        errors: errors.session,
        currentUser: session.currentUserId
    };
};

const mapDispatchToProps = dispatch => {
    return {
    createNotebook: notebook => dispatch(createNotebook(notebook)),
    // otherForm: (
    //         <button onClick={() => dispatch(openModal('edit'))}>
    //             Edit Notebook Title
    //         </button>
    //     ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNotebookForm);