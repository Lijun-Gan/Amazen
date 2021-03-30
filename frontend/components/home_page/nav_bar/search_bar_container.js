import { connect } from "react-redux";
import SearchBar from "./search_bar";
import {fetchBooks, receiveSearch} from '../../../actions/book_actions';

const mapStateToProps = (state) => ({
    books: Object.values(state.entities.books),
    search: state.search
  
});

const mapDispatchToProps = (dispatch) => {
    debugger
    return {
        fetchBooks: () => dispatch(fetchBooks()),
        receiveSearch: (search) => dispatch(receiveSearch(search))
    }
   
};


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);