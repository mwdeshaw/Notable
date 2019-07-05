import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { createNotebook } from '../../actions/notebooks';
import CreateNewNotebook from './create_new_notebook';


const mapStateToProps = ({ errors }) => ({
    errors: errors.session
});

const mapDispatchToProps = dispatch => ({
    action: notebook => dispatch(createNotebook(notebook)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewNotebook);