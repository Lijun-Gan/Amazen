import { connect } from 'react-redux';
import BookIndex from './book_index.jsx';
import {fetchBooks} from '../../../actions/book_actions'

const mapStateToProps=(state)=>{


    return({
        books: Object.values(state.entities.books)
    })
}

const mapDispatchToProps=(dispatch)=>{

    return({
        fetchBooks: ()=>dispatch(fetchBooks())
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(BookIndex)
