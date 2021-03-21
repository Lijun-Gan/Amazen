import {connect} from 'react-redux';
import BookIndex from './book_index';
import {fetchBook} from '../../../actions/book_actions'

const mapStateToProps=(state,ownProps)=>{

    return({

        books: state.entities.books
    })
}

const mapDispatchToProps=(dispatch)=>{
    return({
        fetchBooks: ()=>dispatch(fetchBooks())
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(BookIndex)
