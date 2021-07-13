import { connect } from "react-redux";
import SearchBar from "./search_bar";
import {fetchBooks, receiveSearch, fetchBooksTitle} from '../../../actions/book_actions';

const mapStateToProps = (state) => { 

    return{search: state.search,
    // books: Object.values(state.entities.books),
           books: state.titles.items || []
  }
};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchBooks: () => dispatch(fetchBooks()),
        fetchBooksTitle: (title)=>dispatch(fetchBooksTitle(title)),
        receiveSearch: (search) => dispatch(receiveSearch(search))
    }
   
};


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);