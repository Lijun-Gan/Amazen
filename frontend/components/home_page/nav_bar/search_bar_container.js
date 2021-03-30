import { connect } from "react-redux";
import SearchBar from "./search_bar";
import {receiveBooks, receiveSearch} from '../../../actions/book_actions';

const mapStateToProps = (state) => ({
    books: Object.values(state.entities.books),
    search: state.search
  
});

const mapDispatchToProps = (dispatch) => {
    return {
        receiveBooks: () => dispatch(receiveBooks()),
        receiveSearch: (search) => dispatch(receiveSearch(search))
    }
   
};


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);