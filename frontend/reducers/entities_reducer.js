import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import booksReducer from './books_reducer';
import reviewsReducer from './review_reducer';
import cartsReducer from './carts_reducer';
import ordersReducer from './orders_reducer';
import wishlistsReducer from './wishlists_reducer';
import pricesReducer from './prices_reducer';
import profileReducer from './profile_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    books: booksReducer,
    reviews: reviewsReducer,
    carts: cartsReducer,
    wishlists: wishlistsReducer,
    prices: pricesReducer,
    profile: profileReducer,
    orders: ordersReducer,
    
})

export default entitiesReducer;