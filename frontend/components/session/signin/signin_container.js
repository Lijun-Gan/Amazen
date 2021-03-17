import { connect } from "react-redux";
import Signin from "./signin";
import { signin } from '../../../actions/session_actions';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => {
    return ({
        signin: (user) => dispatch(signin(user)),
    });
};


export default connect(mapStateToProps,mapDispatchToProps)(Signin);