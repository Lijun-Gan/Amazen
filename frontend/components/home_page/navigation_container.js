import {connect } from 'react-redux'
import  NavigationContainer from './navigation'

const mapStateToProps = (state) =>{
    if(state.session.id !== undefined){
        const userId = state.session.id
        return ({
            user: state.entities.users[userId],
            cartsBook: JSON.parse(localStorage.getItem(userId ))
        })
    }else{
        return ({
            user: {
                username: "",
            },
            cartsBook: {}
        })
    }
  
}

export default connect(mapStateToProps, null)(NavigationContainer)