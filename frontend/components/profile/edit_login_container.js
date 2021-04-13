import { connect } from "react-redux";
import EditLogin from "./edit_login";
import { fetchProfile } from "../../actions/profile_actions";


const mapStateToProps = state => ({
    currentUserId: state.session.id,
    user: state.entities.profile,
    books: state.entities.books
});

const mapDispatchToProps = dispatch => ({
    fetchProfile: (userId) => dispatch(fetchProfile(userId)),

});

export default connect(mapStateToProps,mapDispatchToProps)(EditLogin);