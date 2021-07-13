import React from 'react';
import {checkUser} from '../../util/session_api_util';
import checkZipCode from '../home_page/nav_bar/checkZipCode';

class EditLogin extends React.Component {
    
    constructor(props) {
        super(props);

        this.state ={
            username: this.props.userInfo.username || "",
            full_name: this.props.userInfo.full_name || "",
            phone_number: this.props.userInfo.phone_number || "",
            email: this.props.userInfo.email || "",
            // city: this.props.userInfo.city || "",
            zip_code: this.props.userInfo.zip_code || "",
            id: this.props.userInfo.id || "",
            // cityError: "",

            zipCodeError: "",
            // emailError: "",
            phoneError: false,
            phoneExist: "",
        };

        // this.handleUpdate = this.handleUpdate.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        
        this.props.fetchProfile(this.props.currentUserId)
    // .then((profile)=>{
    //         let user_phone = profile.user.phone_number;
    //         if(profile.user.phone_number === null) user_phone = "";
            
    //         this.setState({
    //             username: profile.user.username,
    //             phone_number: user_phone,
    //             email: profile.user.email,
    //             id: profile.user.id,
    //         })
    //     })
    }

    handleUpdate(field){
        return (e)=>{
            
            this.setState({
                [field]: e.target.value
            })

        }
    }
  
    handleSubmit(e){
        e.preventDefault();
        
        let errors = 0 ;
        let phoneErr = "" ;
        let phoneExistErr = "" ;
        let zipCodeErr = "" ;

        if(this.state.phone_number.length !== 10 || !(/^\d+$/.test(this.state.phone_number))){
            phoneErr = <h5 className="phone-length-error">❗ Enter 10-digit phone number</h5>
            errors ++
        }


        checkUser(this.state.phone_number).then((response)=>{
            if(response.exist === 1 && this.state.phone_number !== this.props.userInfo.phone_number) {
                phoneExistErr = <h5 className="phone-length-error">❗ this phone number is already taken</h5>
                errors ++
            }
            
            const returnCity = checkZipCode(this.state.zip_code)
            if(this.state.zip_code !== ""){

                if(this.state.zip_code.length < 3 || !(/^\d+$/.test(this.state.phone_number)) || !returnCity ){
    
                    zipCodeErr = <h5 className="phone-length-error">❗ this is not a valid US zip code</h5>
                    errors ++
                }
            }

            if(errors === 0){
                this.props.updateZipCode({city: returnCity, zip_code: this.state.zip_code, full_name: this.state.full_name, phone_number: this.state.phone_number})
                .then(()=>this.props.history.push("/profile"))
            }else{
                this.setState({
                    zipCodeError: zipCodeErr,
              
                    phoneError: phoneErr,
                    phoneExist: phoneExistErr,
                })
            }
        })




        // this.setState({
        //     phoneExist: 0,
        //     phoneError: false,
        // })

        // if(this.state.phone_number.length === 0){
        //     this.props.updateProfile(this.state).then(()=>this.props.history.push("/profile"))
        // }else if(this.state.phone_number.length !== 10 || !(/^\d+$/.test(this.state.phone_number))){
        //     this.setState({phoneError: true})
        // }else{
        //     checkUser(this.state.phone_number).then((response)=>{
        //         if (response.exist=== 0) {
        //             this.props.updateProfile(this.state).then(()=>this.props.history.push("/profile"))
        //         }else{
           
        //             this.setState({phoneExist: 1})
        //         }

        //     });
        // }

        
  
    }

    render(){

        return(
            <div className="edit-login-container">
                <h1>Login & security</h1>
                <form className="edit-login-inner" onSubmit={this.handleSubmit}>
                    <div className="edit-login-item">
                        <p className="word-bold">Username:</p>
                        <p className="word-regular">{this.state.username}</p>
                    </div>
                    

                    <div className="edit-login-item">
                        <p className="word-bold">Email:</p>
                        <p className="word-regular">{this.state.email}</p>
                    </div>

                    <div className="edit-login-item">
                        <p className="word-bold">Full Name:</p>
                        <input type="text" maxLength="22" className="profile-phone" value={this.state.full_name} onChange={this.handleUpdate("full_name")}/>

                    </div>

                    {/* <div className="edit-login-item">
                        <p className="word-bold">City:</p>
                        <p  className="login-city">{this.state.city}</p>
                    </div> */}

                    <div className="edit-login-item">
                        <p className="word-bold">Zip Code:</p>
                        <input type="text" maxLength="5"  className="profile-phone" value={this.state.zip_code} onChange={this.handleUpdate("zip_code")}/>
                        {this.state.zipCodeError}
                    </div>

                    <div className="edit-login-item last">
                        <p className="word-bold">Mobile Phone Number:</p>
                        <input type="text" maxLength="10" className="profile-phone" placeholder="10-digit phone number" value={this.state.phone_number} onChange={this.handleUpdate("phone_number")}/>
                        {/* {this.state.phoneError ? <h5 className="phone-length-error">❗ Enter 10-digit phone number</h5> : null}
                        {this.state.phoneExist === 1 ? <h5 className="phone-length-error">❗ this phone number is already taken</h5> : null} */}
                        {this.state.phoneError }
                        {this.state.phoneExist}

                    </div>

                <button type="submit" className="edit-done-btn">Submit</button>
                <button onClick={()=>this.props.history.push("/profile")} className="eidt-profile-close-btn">Close</button>

                </form>

            </div>
        )
    }

}

export default EditLogin;