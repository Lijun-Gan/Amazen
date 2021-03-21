import * as APIUtil from '../util/book_api_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS ';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';

const receiveBooks = (books) => {
    return {
        type: RECEIVE_BOOKS,
        books
    }
};

const receiveBook = (book) => ({
    type: RECEIVE_BOOK,
    book
});

export const fetchBooks = (book) => dispatch => {
    return (
        APIUtil.fetchBooks(book).then(books => dispatch(receiveBooks(books)))
    )
};

export const fetchBook = (bookId) => dispatch => {
    // debugger
    return (
        APIUtil.fetchBook(bookId).then(book => { dispatch(receiveBook(book))})
    )
}

// ;
