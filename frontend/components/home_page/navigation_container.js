import {connect } from 'react-redux'
import  NavigationContainer from './navigation'

const mapStateToProps = (state) =>{
    if(state.session.id !== undefined){
        const userId = state.session.id
        return ({
            user: state.entities.users[userId],
        })
    }else{
        return ({
            user: {
                username: "",
            }
        })
    }
  
}

export default connect(mapStateToProps, null)(NavigationContainer)