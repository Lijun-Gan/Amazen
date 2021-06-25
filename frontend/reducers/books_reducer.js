
import { RECEIVE_BOOKS, RECEIVE_BOOK, RECEIVE_BOOK_FOR_REVIEW } from '../actions/book_actions';

// const defaultState = {
//     title: "",
//     image_url: "",
// };

const booksReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_BOOKS:
            
            return Object.assign({} ,action.books.books);

        case RECEIVE_BOOK:

            nextState[action.oneBook.book.id] = action.oneBook.book;

            return nextState;
     

        default:
            return state;
    }
};

export default booksReducer;