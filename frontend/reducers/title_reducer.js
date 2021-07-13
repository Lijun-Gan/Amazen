
import { RECEIVE_BOOKS_TITLES } from '../actions/book_actions';

// const defaultState = {
//     title: "",
//     image_url: "",
// };

const titleReducer = (state = {}, action) => {

    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_BOOKS_TITLES:
            
            // let newState = [];
            // Object.values(action.books.books).forEach(book => {
            //     newState.push({id: book.id, title: book.title })
            // });
            
      
            // return newState
            // return Object.assign(nextState,action.books.books );
     
            return Object.assign(nextState, action.titles)
        default:
            return state;
    }
};

export default titleReducer;