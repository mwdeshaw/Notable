import { connect } from 'react-redux';
import { selectOneNotebook } from '../../actions/notebooks';
import NotebookShowPage from './notebook_index';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
    const currentUser = state.entities.users[state.session.currentUserId];
    const notebook = selectOneNotebook(state.entities, id);

    return { currentUser, notebook };
};

const mapDispatchToProps = dispatch => ({
    fetchNotebook: id => dispatch(fetchNotebook(id)),
    deleteNotebook: id => dispatch(deleteNotebook(id)),
    openModal: () => dispatch(openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShowPage);