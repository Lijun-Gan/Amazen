import { connect } from "react-redux";
import Profile from "./profile";
import { fetchProfile } from "../../actions/profile_actions";
import {fetchBooks} from "../../actions/book_actions";

const mapStateToProps = state => ({
    currentUserId: state.session.id,
    user: state.entities.profile,
    books: state.entities.books
});

const mapDispatchToProps = dispatch => ({
    fetchProfile: (userId) => dispatch(fetchProfile(userId)),
    fetchBooks: ()=> dispatch(fetchBooks())
});

export default connect(mapStateToProps,mapDispatchToProps)(Profile);