import {connect} from 'react-redux';
import BookShow from './book_show';
import {fetchBook} from '../../../actions/book_actions'
import { deleteReview,updateReview } from '../../../actions/review_actions';

const mapStateToProps=(state,ownProps)=>{
    debugger

    let bookReviews = [];
    let allReviews;
    const oneBook = state.entities.books[ownProps.match.params.id];
    debugger
    if(Object.keys(state.entities.reviews).length !== 0 && state.entities.reviews !== undefined && oneBook.reviewIds !== undefined ){
        debugger
        allReviews = state.entities.reviews
        oneBook.reviewIds.forEach((id)=>{
            debugger
            bookReviews.push(allReviews[id])
        })
    }
  

    return({
        book: oneBook,
        reviews: bookReviews,
        currentUser: state.session.id

    })
}

const mapDispatchToProps=(dispatch)=>{
    return({
        fetchBook: (id)=>dispatch(fetchBook(id)),
        deleteReview: (review)=>dispatch(deleteReview(review)),
        updateReview: (review)=>dispatch(updateReview(review))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(BookShow)
