import { connect } from 'react-redux';
import { logout } from  '../../actions/session';
import NavigationBar from './navigation_bar'

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.currentUserId]
});
//user info will be drawn from users slice of state

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);