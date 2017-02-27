import Splash from './splash';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/errors_actions';

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  null,
  mapDispatchToProps
)(Splash);
