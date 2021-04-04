import {connect} from 'react-redux';
import BookShow from './book_show';
import {fetchBook} from '../../../actions/book_actions'
import { deleteReview,updateReview } from '../../../actions/review_actions';
import {receiveCart} from '../../../actions/cart_actions'

const mapStateToProps=(state,ownProps)=>{
     

    let bookReviews = [];
    let allReviews;
     
    const oneBook = state.entities.books[ownProps.match.params.id];
     
    if(Object.keys(oneBook !== undefined && state.entities.reviews).length !== 0 && state.entities.reviews !== undefined && oneBook.reviewIds !== undefined ){
         
        allReviews = state.entities.reviews
        oneBook.reviewIds.forEach((id)=>{ 
            bookReviews.push(allReviews[id])
        })
    }
  

    return({
        book: oneBook,
        reviews: bookReviews,
        currentUserId: state.session.id,
        
    })
}

const mapDispatchToProps=(dispatch)=>{
    return({
        fetchBook: (id)=>dispatch(fetchBook(id)),
        deleteReview: (review)=>dispatch(deleteReview(review)),
        updateReview: (review)=>dispatch(updateReview(review)),
        receiveCart: (cart)=>dispatch(receiveCart(cart)),
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(BookShow)
