import { connect } from 'react-redux';
import { login  } from '../../../actions/session';
import HomePage from './home_page';

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
});

export default connect(null, mapDispatchToProps)(HomePage);
