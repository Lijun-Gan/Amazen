import { connect } from "react-redux";
import EditLogin from "./edit_login";
import { fetchProfile, updateProfile } from "../../actions/profile_actions";


const mapStateToProps = state => {

    return {
    currentUserId: state.session.id,
    user: state.entities.profile,
}};

const mapDispatchToProps = dispatch => ({
    fetchProfile: (userId) => dispatch(fetchProfile(userId)),
    updateProfile: (user) => dispatch(updateProfile(user))

});

export default connect(mapStateToProps,mapDispatchToProps)(EditLogin);