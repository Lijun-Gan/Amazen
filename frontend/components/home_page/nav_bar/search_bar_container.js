import { connect } from "react-redux";
import SearchBar from "./search_bar";
import {fetchBooks, receiveSearch, fetchBooksTitle} from '../../../actions/book_actions';

const mapStateToProps = (state) => ({
    search: state.search,
    books: Object.values(state.entities.books)
  
});

const mapDispatchToProps = (dispatch) => {

    return {
        fetchBooks: () => dispatch(fetchBooks()),
        fetchBooksTitle: (title)=>dispatch(fetchBooksTitle(title)),
        receiveSearch: (search) => dispatch(receiveSearch(search))
    }
   
};


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);