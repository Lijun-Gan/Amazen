import { connect } from "react-redux";
import Signin from "./signin";
import { signin } from '../../../actions/session_actions';

// const mapStateToProps = (state) => ({
    
// });

const mapDispatchToProps = (dispatch) => {
    return ({
        signin: (user) => dispatch(signin(user)),
    });
};


export default connect(null,mapDispatchToProps)(Signin);