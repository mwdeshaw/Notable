import { connect } from 'react-redux';
import { selectOneNotebook } from '../../reducers/selectors';
import NotebookShowPage from './notebook_show_page';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {   
    const currentUser = state.entities.users[state.session.currentUserId];
    const notebook = selectOneNotebook(state.entities, ownProps.match.params.notebookId)
    return { currentUser, notebook };
};

const mapDispatchToProps = dispatch => ({
    fetchNotebook: id => dispatch(fetchNotebook(id)),
    openModal: () => dispatch(openModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShowPage);