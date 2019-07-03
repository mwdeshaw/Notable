import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);