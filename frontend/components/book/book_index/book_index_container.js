import { connect } from 'react-redux';
import BookIndex from './book_index';
import {fetchBooks, 
        fetchBooksCategory, 
        fetchBooksRecommendation, 
        fetchBooksFormat, 
        fetchBooksPrime,
        fetchBooksDiscount,
        fetchBestBooks,
        fetchCelebrityPicks,
        fetchBookBox,
        clearBookState } from '../../../actions/book_actions'

const mapStateToProps=(state)=>{

    return({

        books: state.entities.books,
        // discount: state.discount,
        prime: state.prime,
        currentUserId: state.session.id || "" ,
    })
}

const mapDispatchToProps=(dispatch)=>{

    return({
        fetchBooks: ()=>dispatch(fetchBooks()),
        fetchBooksCategory: (category)=>dispatch(fetchBooksCategory(category)),
        fetchBooksFormat: (format)=>(dispatch(fetchBooksFormat(format))),
        fetchBooksRecommendation: ()=>(dispatch(fetchBooksRecommendation())),
        fetchBooksPrime: ()=>(dispatch(fetchBooksPrime())),
        fetchBooksDiscount: ()=>(dispatch(fetchBooksDiscount())),
        fetchBestBooks: ()=>(dispatch( fetchBestBooks())),
        fetchCelebrityPicks: ()=>(dispatch(fetchCelebrityPicks())),
        fetchBookBox: ()=>(dispatch(fetchBookBox())),
        clearBookState: ()=>(dispatch(clearBookState())),
   
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(BookIndex)

// fetchBestBooks
// fetchCelebrityPicks
// fetchBookBox

// fetchBestBooks
// fetchCelebrityPicks
// fetchBookBox
// handleCelebrityPicks
// handleBestBooks
// handleBookBox
// Best Books of the Month
// Celebrity Picks
// Book Box