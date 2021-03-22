import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview} from '../../actions/review_actions';

const mapStateToProps = (state,ownProps) => {
    return{
        review: {
            title: "",
            body: "",
            rating: 0,
            book_id: ownProps.match.params.bookId,
            user_id: state.session.id
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        action: (review)=>(dispatch(createReview(review)))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewForm)