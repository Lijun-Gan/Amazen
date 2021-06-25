import { connect } from "react-redux";
import Profile from "./profile";
import { fetchProfile } from "../../actions/profile_actions";
import {fetchBooks} from "../../actions/book_actions";
import {signin} from "../../actions/session_actions";
import { removeProfileReview, deleteReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = state => {

    return{
        currentUserId: state.session.id,
        user: state.entities.profile,
        books: state.entities.books
    };
}

const mapDispatchToProps = dispatch => ({
    fetchProfile: (userId) => dispatch(fetchProfile(userId)),
    fetchBooks: ()=> dispatch(fetchBooks()),
    signin: (user) => dispatch(signin(user)),
    // removeProfileReview: (review)=>dispatch(removeProfileReview(review)),
    deleteReview: (review)=>dispatch(deleteReview(review)),
    updateReview: (review)=>dispatch(updateReview(review)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Profile);