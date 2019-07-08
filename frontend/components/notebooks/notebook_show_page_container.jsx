import { connect } from 'react-redux';
import { selectOneNotebook } from '../../reducers/selectors';
import { fetchNotebook } from '../../actions/notebooks';
import NotebookShowPage from './notebook_show_page';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
    notebook: state.entities.notebooks[ownProps.match.params.notebookId]
});

const mapDispatchToProps = dispatch => ({
    fetchNotebook: id => dispatch(fetchNotebook(id)),
    openModal: () => dispatch(openModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShowPage);