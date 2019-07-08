import { connect } from 'react-redux';
import { logout } from  '../../actions/session';
import { fetchNotebooks } from  '../../actions/notebooks';
import { selectAllNotebooksByUpdated } from  '../../reducers/selectors';
import NavigationBar from './navigation_bar'

const mapStateToProps = (state) => {
    
return ({
    currentUser: state.entities.users[state.session.currentUserId],
    notebooks: selectAllNotebooksByUpdated(state)
})
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);