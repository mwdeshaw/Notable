import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { createNotebook } from '../../actions/notebooks';
import CreateNewNotebook from './create_new_notebook';


const mapStateToProps = ({ errors, session }) => {
    return {
    errors: errors.session,
    currentUser: session.currentUserId
    }
}

const mapDispatchToProps = dispatch => ({
    createNotebook: notebook => dispatch(createNotebook(notebook)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewNotebook);