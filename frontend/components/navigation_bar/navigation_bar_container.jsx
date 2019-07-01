import { connect } from 'react-redux';
import { logout } from  '../../actions/session';
import NavigationBar from './navigation_bar'

const mapStateToProps = (state, ownProps) => ({
        currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);