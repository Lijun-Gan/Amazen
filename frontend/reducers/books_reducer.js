
import { RECEIVE_BOOKS, RECEIVE_ALL_BOOKS, RECEIVE_BOOK, CLEAR_BOOK_STATE } from '../actions/book_actions';

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
            
        case RECEIVE_ALL_BOOKS:
            
            return Object.assign({} ,action.books.books);
                
        case RECEIVE_BOOK:
            const id = action.oneBook.book.id
            let showBook = action.oneBook.book
            if(nextState[id]){    
                showBook.discount =  nextState[id].discount
                showBook.price =  nextState[id].price
                showBook.format =  nextState[id].format
            }
            nextState[id] = showBook;
            // nextState[action.oneBook.book.id] = action.oneBook.book;

            return nextState;
                    
        case CLEAR_BOOK_STATE:
            
            return {};

        default:
            return state;
    }
};

export default booksReducer;