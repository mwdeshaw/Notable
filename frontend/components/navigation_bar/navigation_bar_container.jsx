import { connect } from 'react-redux';
import { logout } from  '../../actions/session';
import NavigationBar from './navigation_bar'

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser
});
//to be changed: session will be converted to currentUserId and
//user info will be drawn from users slice of state

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);