import { connect } from 'react-redux';
import BookIndex from './book_index.jsx';
import {fetchBooks, fetchBooksCategory} from '../../../actions/book_actions'

const mapStateToProps=(state)=>{


    return({
        books: state.entities.books
    })
}

const mapDispatchToProps=(dispatch)=>{

    return({
        fetchBooks: ()=>dispatch(fetchBooks()),
        fetchBooksCategory: (category)=>dispatch(fetchBooksCategory(category))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(BookIndex)
