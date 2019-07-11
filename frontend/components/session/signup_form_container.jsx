import { connect } from 'react-redux';
import { createNewUser, clearErrors } from '../../actions/session';
import SignupForm from './signup_form';
import { createNotebook } from '../../actions/notebooks';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session
});

const mapDispatchToProps = dispatch => ({
    createNewUser: user => dispatch(createNewUser(user)),
    clearErrors: () => dispatch(clearErrors()),
    createNotebook: notebook => dispatch(createNotebook(notebook))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);