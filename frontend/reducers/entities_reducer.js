import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import booksReducer from './books_reducer';
import reviewsReducer from './review_reducer';
import cartsReducer from './carts_reducer';
import wishlistsReducer from './wishlists_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    books: booksReducer,
    reviews: reviewsReducer,
    carts: cartsReducer,
    wishlists: wishlistsReducer,
})

export default entitiesReducer;