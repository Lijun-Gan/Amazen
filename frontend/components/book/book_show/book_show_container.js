import {connect} from 'react-redux';
import BookShow from './book_show';
import {fetchBook} from '../../../actions/book_actions'
import { deleteReview,updateReview } from '../../../actions/review_actions';

const mapStateToProps=(state,ownProps)=>{

    return({

        book: state.entities.books[ownProps.match.params.id],
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
