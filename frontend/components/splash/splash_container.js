import Splash from './splash';
import { connect } from 'react-redux';
// import { signup, login, logout } from '../../actions/session_actions';

const mapStateToProps = currentUser => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
