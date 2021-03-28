
import { RECEIVE_BOOKS, RECEIVE_BOOK, RECEIVE_BOOK_FOR_REVIEW } from '../actions/book_actions';

// const defaultState = {
//     title: "",
//     image_url: "",
// };

const booksReducer = (State = {}, action) => {

    Object.freeze(State);
    let nextState = Object.assign({}, State);

    switch (action.type) {
        case RECEIVE_BOOKS:
             
            return Object.assign({},State,action.books);

        case RECEIVE_BOOK:
            // 
            nextState[action.oneBook.book.id] = action.oneBook.book;

            return nextState;
        // case RECEIVE_BOOK_FOR_REVIEW:
        //     return Object.assign({}, State, { display: action.anime.details });

        default:
            return State;
    }
};

export default booksReducer;