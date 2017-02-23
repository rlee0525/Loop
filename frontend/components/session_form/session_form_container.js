import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';

const mapStateToProps = currentUser => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({
  signup: () => dispatch(signup()),
  login: () => dispatch(login())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
