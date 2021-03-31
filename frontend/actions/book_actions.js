import * as APIUtil from '../util/book_api_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS ';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
// export const RECEIVE_BOOK_FOR_REVIEW = 'RECEIVE_BOOK_FOR_REVIEW ';
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

export const receiveBooks = (books) => {
    return {
        type: RECEIVE_BOOKS,
        books
    }
};

export const receiveBook = (oneBook) => ({
    type: RECEIVE_BOOK,
    oneBook
});

// export const receiveBookForReview = (book) => ({
//     type: RECEIVE_BOOK,
//     book
// });

export const receiveSearch = (search) => ({
    type: RECEIVE_SEARCH,
    search
})


export const fetchBooks = (book) => dispatch => {
    return (
        APIUtil.fetchBooks(book).then(books => dispatch(receiveBooks(books)))
    )
};

export const fetchBook = (bookId) => dispatch => {
    
    return (
        
        APIUtil.fetchBook(bookId).then(book => {  
            dispatch(receiveBook(book))})
            )
        }
        
        // ;
        
export const fetchBooksCategory = (category) => dispatch => {
    return (
        APIUtil.fetchBooksCategory(category).then(books => dispatch(receiveBooks(books)))
    )
};
export const fetchBooksTitle = (title) => dispatch => {
    debugger
    return (
        APIUtil.fetchBooksTitle(title).then(books => dispatch(receiveBooks(books)))
    )
};