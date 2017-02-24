import Navbar from './navbar';
import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
