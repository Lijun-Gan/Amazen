import React from 'react';


class EditLogin extends React.Component {
    
    constructor(props) {
        super(props);

        this.state ={
            username: "",
            phone_number: "",
            email: "",
            id: "",
        }

        
        this.updatePhone = this.updatePhone.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        
        this.props.fetchProfile(this.props.currentUserId).then((profile)=>{
            
            this.setState({
                username: profile.user.username,
                phone_number: profile.user.phone_number,
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
        
        this.props.updateProfile(this.state).then(()=>this.props.history.push("/profile"))
    }

    render(){

        return(
            <div className="edit-login-container">
                <h1>Login & security</h1>
                <form className="edit-login-inner" onSubmit={this.handleSubmit}>
                    <div className="edit-login-item">
                        <p>Name:</p>
                        <p>{this.state.username}</p>
                    </div>

                    <div className="edit-login-item">
                        <p>Email:</p>
                        <p>{this.state.email}</p>
                    </div>

                    <div className="edit-login-item last">
                        <p>Mobile Phone Number:</p>
                        <input type="text" className="profile-phone" value={this.state.phone_number} onChange={this.updatePhone}/>
                    </div>

                <button className="edit-done-btn">Done</button>

                </form>

            </div>
        )
    }

}

export default EditLogin;