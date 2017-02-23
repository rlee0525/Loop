import Navbar from './navbar';
import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';

const mapStateToProps = currentUser => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({
  signup: () => dispatch(signup()),
  login: () => dispatch(login()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
