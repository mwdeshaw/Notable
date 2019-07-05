import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session';
import { fetchNotebook, updateNotebook } from '../../actions/notebooks';
import EditNotebook from './edit_notebook';

const mapStateToProps = ({ notebook }) => {
    debugger
    return (
        { notebook: notebook
}
    )
};

const mapDispatchToProps = dispatch => ({
    fetchNotebook: id => fetchNotebook(createNotebook(id)),
    updateNotebook: notebook => dispatch(updateNotebook(notebook)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditNotebook);