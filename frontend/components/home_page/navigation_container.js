import {connect } from 'react-redux'
import  Navigation from './navigation'
import {fetchBooks} from '../../actions/book_actions'
import { signout } from '../../actions/session_actions';
import { withRouter } from "react-router";

const mapStateToProps = (state) =>{

    let books = [];
    let bookQuantity = 0;
    let userName = ""


     
    if(state.session.id !== undefined && state.session.id != null ){
        const userId = state.session.id
        userName = state.entities.users[userId].username

        if(localStorage.length !== 0 && localStorage.getItem(userId ) !== null){

             
            books = Object.values(JSON.parse(localStorage.getItem(userId )))
            books.forEach(book => {
                bookQuantity = bookQuantity + Number(book.quantity);
            });
        }
    }
    return ({
            username: userName,
            cartsBook: books,
            quantity: bookQuantity
        })  
}
// const mapStateToProps = (state) =>{
//      
//     if(state.session.id !== undefined && localStorage.length !== 0){
//         const userId = state.session.id
//          
//         return ({
//             username: state.entities.users[userId].username,
//           cartsBook:  Object.values(JSON.parse(localStorage.getItem(userId )))
//         })
//     }else{
//          
//         return ({
//             username: "",
//             cartsBook: []
//         })
//     }
  
// }

const mapDispatchToProps = (dispatch) =>{

    return{
        fetchBooks: ()=>{dispatch(fetchBooks())},
        signout: () => {dispatch(signout())}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation))