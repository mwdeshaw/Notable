import { connect } from 'react-redux';
import { fetchNotebooks } from '../../actions/notebooks';
import { selectAllNotebooksByUpdated } from '../../reducers/selectors';
import Notes from './notes';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUserId,
        notebooks: selectAllNotebooksByUpdated(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchNotebooks: () => dispatch(fetchNotebooks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);