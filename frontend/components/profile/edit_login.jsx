import React from 'react';
import {checkUser} from '../../util/session_api_util';

class EditLogin extends React.Component {
    
    constructor(props) {
        super(props);

        this.state ={
            username: "",
            phone_number: "",
            email: "",
            id: "",
            error: false,
            exist: 0,
        }

        
        this.updatePhone = this.updatePhone.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        
        this.props.fetchProfile(this.props.currentUserId).then((profile)=>{
            let user_phone = profile.user.phone_number;
            if(profile.user.phone_number === null) user_phone = "";
            
            this.setState({
                username: profile.user.username,
                phone_number: user_phone,
                email: profile.user.email,
                id: profile.user.id
            })
        })
    }

    updatePhone(e){
        
        this.setState({
            phone_number: e.target.value
        })
    }
  
    handleSubmit(e){
        e.preventDefault();
  

        this.setState({
            exist: 0,
            error: false,
        })

        if(this.state.phone_number.length === 0){
            this.props.updateProfile(this.state).then(()=>this.props.history.push("/profile"))
        }else if(this.state.phone_number.length !== 10 || !(/^\d+$/.test(this.state.phone_number))){
            this.setState({error: true})
        }else{
            checkUser(this.state.phone_number).then((response)=>{
                if (response.exist=== 0) {
                    this.props.updateProfile(this.state).then(()=>this.props.history.push("/profile"))
                }else{
           
                    this.setState({exist: 1})
                }

            });
        }

        // if((this.state.phone_number.length !== 10 && this.state.phone_number.length !== 0 ) || (!(/^\d+$/.test(this.state.phone_number)) && this.state.phone_number.length !== 0 )){
        //     this.setState({error: true})
        // }else{
   
        //     checkUser(this.)
        //     this.props.updateProfile(this.state).then(()=>this.props.history.push("/profile"))
        // }
  
    }

    render(){

        return(
            <div className="edit-login-container">
                <h1>Login & security</h1>
                <form className="edit-login-inner" onSubmit={this.handleSubmit}>
                    <div className="edit-login-item">
                        <p className="word-bold">Name:</p>
                        <p className="word-regular">{this.state.username}</p>
                    </div>

                    <div className="edit-login-item">
                        <p className="word-bold">Email:</p>
                        <p className="word-regular">{this.state.email}</p>
                    </div>

                    <div className="edit-login-item last">
                        <p className="word-bold">Mobile Phone Number:</p>
                        <input type="text" className="profile-phone" value={this.state.phone_number} onChange={this.updatePhone}/>
                        {this.state.error ? <h5 className="phone-length-error">❗ Enter 10-digit phone number</h5> : null}
                        {this.state.exist === 1 ? <h5 className="phone-length-error">❗ this phone number is already taken</h5> : null}
                    </div>

                <button type="submit" className="edit-done-btn">Done</button>

                </form>

            </div>
        )
    }

}

export default EditLogin;