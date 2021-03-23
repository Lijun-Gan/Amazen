import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview} from '../../actions/review_actions';
import { fetchBook} from '../../actions/book_actions';

const mapStateToProps = (state,ownProps) => {
    let title = "";
    let img_url = ""
    const bookId = ownProps.match.params.bookId;
    if(state.entities.books[bookId]){
        title = state.entities.books[bookId].title
        img_url = state.entities.books[bookId].image_url
    }
    // if(state.entities.books[bookId].title){
    // }

    debugger
    return{
        review: {
            title: "",
            body: "",
            rating: "",
            book_id: bookId,
            user_id: state.session.id
        },
        formType: "Create Review",
        bookTitle: title,
        bookImgUrl: img_url
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        action_submit: (review)=>(dispatch(createReview(review))),
        action_mount: (reviewId)=>(dispatch(fetchBook(reviewId)))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewForm)