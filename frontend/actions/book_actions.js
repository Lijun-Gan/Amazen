import * as APIUtil from '../util/book_api_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOKS_TITLES = 'RECEIVE_BOOKS_TITLES';
export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS ';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
// export const RECEIVE_BOOK_FOR_REVIEW = 'RECEIVE_BOOK_FOR_REVIEW ';
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const CLEAR_BOOK_STATE = "CLEAR_BOOK_STATE";

export const receiveBooks = (books) => {
    return {
        type: RECEIVE_BOOKS,
        books
    }
};

export const receiveBooksTitles = (titles) => {
    return {
        type: RECEIVE_BOOKS_TITLES,
        titles
    }
};

export const receiveAllBooks = (books) => {
    return {
        type: RECEIVE_ALL_BOOKS,
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



export const clearBookState = () => {
    return {
        type: CLEAR_BOOK_STATE,
    
    }
}


export const fetchBooksTitles = () => dispatch => {
    return (
        APIUtil.fetchBooksTitles().then(titles => dispatch(receiveBooksTitles(titles)))
    )
};

export const fetchBooks = (book) => dispatch => {
    return (
        APIUtil.fetchBooks(book).then(books => dispatch(receiveAllBooks(books)))
    )
};

export const fetchBook = (bookId) => dispatch => {
    
    return (
        
        APIUtil.fetchBook(bookId).then(book => {  
            dispatch(receiveBook(book))})
            )
        }
        
        // ;
        
export const fetchBestBooks = () => dispatch => {
    return (
        APIUtil.fetchBestBooks().then(books => dispatch(receiveBooks(books)))
    )
};
export const fetchCelebrityPicks = () => dispatch => {
    return (
        APIUtil.fetchCelebrityPicks().then(books => dispatch(receiveBooks(books)))
    )
};
export const fetchBookBox = () => dispatch => {
    return (
        APIUtil.fetchBookBox().then(books => dispatch(receiveBooks(books)))
    )
};
export const fetchBooksDiscount = () => dispatch => {
    return (
        APIUtil.fetchBooksDiscount().then(books => dispatch(receiveBooks(books)))
    )
};

export const fetchBooksPrime = () => dispatch => {
    return (
        APIUtil.fetchBooksPrime().then(books => dispatch(receiveBooks(books)))
    )
};

export const fetchBooksRecommendation = () => dispatch => {
    return (
        APIUtil.fetchBooksRecommendation().then(books => dispatch(receiveBooks(books)))
    )
};

export const fetchBooksCategory = (category) => dispatch => {
    return (
        APIUtil.fetchBooksCategory(category).then(books => dispatch(receiveBooks(books)))
    )
};

export const fetchBooksFormat = (format) => dispatch => {
    return (
        APIUtil.fetchBooksFormat(format).then(books => dispatch(receiveBooks(books)))
    )
};

export const fetchBooksTitle = (title) => dispatch => {
    
    return (
        APIUtil.fetchBooksTitle(title).then(books => dispatch(receiveBooks(books)))
    )
};