import { connect } from 'react-redux';
import BookIndex from './book_index.jsx';
import {fetchBooks, fetchCategoryBooks} from '../../../actions/book_actions'

const mapStateToProps=(state)=>{


    return({
        books: Object.values(state.entities.books)
    })
}

const mapDispatchToProps=(dispatch)=>{

    return({
        fetchBooks: ()=>dispatch(fetchBooks()),
        fetchCategoryBooks: (category)=>dispatch(fetchCategoryBooks(category))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(BookIndex)
