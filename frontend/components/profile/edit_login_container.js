import { connect } from "react-redux";
import EditLogin from "./edit_login";
import { fetchProfile, updateProfile } from "../../actions/profile_actions";
import { updateZipCode } from '../../actions/session_actions';


const mapStateToProps = state => {

    return {
    currentUserId: state.session.id,
    user: state.entities.profile,
    userInfo: state.entities.users[state.session.id]
}};

const mapDispatchToProps = dispatch => ({
    fetchProfile: (userId) => dispatch(fetchProfile(userId)),
    updateProfile: (user) => dispatch(updateProfile(user)),
    updateZipCode: (user)=>(dispatch(updateZipCode(user)))

});

export default connect(mapStateToProps,mapDispatchToProps)(EditLogin);