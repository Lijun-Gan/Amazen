import { connect } from 'react-redux';

// import { signout } from '../../actions/session_actions';
import HomePage from './navigation';

// const mapStateToProps = ({ session, entities: { users } }) => {
//   return {
//     currentUser: users[session.id]
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   signout: () => dispatch(signout())
// });

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
