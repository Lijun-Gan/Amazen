import { connect } from 'react-redux';
import  SearchResult  from './search_result';
import {fetchBooks, fetchBooksCategory} from '../../actions/book_actions'

const mapStateToProps=(state)=>{

    // let state_books;
    // let state_total;
    // let searchItem;


    // if(state.entities.books){
    // //     state_books = {};
    // //     state_total = 0
    // state_books = state.entities.books
    // state_total = Object.values(state.entities.books).length
    // searchItem = state.search
    // // }else{

    // }

    return({
        books: Object.values(state.entities.books),
        // total: state_total,
        search: state.search
      
    })
}

const mapDispatchToProps=(dispatch)=>{

    return({
        fetchBooks: ()=>dispatch(fetchBooks()),
        // fetchBooksCategory: (category)=>dispatch(fetchBooksCategory(category))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)( SearchResult )