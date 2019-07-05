import { connect } from 'react-redux';
import { selectAllNotebooks } from  '../../reducers/selectors';
import { logout } from  '../../actions/session';
import { fetchNotebooks } from  '../../actions/notebooks';
import NavigationBar from './navigation_bar'

const mapStateToProps = (state) => {
    return ({
    currentUser: state.entities.users[state.session.currentUserId],
    notebooks: selectAllNotebooks(state)
});
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchNotebooks: () => dispatch(fetchNotebooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);