import { connect } from 'react-redux';

import { signout } from '../../../actions/session_actions';
import navSignin from './nav_signin';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(signout())
});

export default connect(mapStateToProps, mapDispatchToProps)(navSignin);
