import { connect } from 'react-redux';
import Home from './home.jsx';
import {fetchBooks, 
    fetchBooksCategory, 
    fetchBooksRecommendation, 
    fetchBooksFormat, 
    fetchBooksPrime,
    fetchBooksDiscount,
    fetchBestBooks,
    fetchCelebrityPicks,
    fetchBookBox} from '../../../actions/book_actions'

const mapStateToProps=(state)=>{


    return({
        books: state.entities.books,
        // discount: state.discount,
        prime: state.prime,
        currentUserId: state.session.id,
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
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
