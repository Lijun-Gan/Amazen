import { connect } from "react-redux";
import SignUp from "./signup";
import { signup } from '../../../actions/session_actions';


const mapStateToProps = (state) => ({
    errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (user) => dispatch(signup(user))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(SignUp);