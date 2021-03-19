import React from 'react';
import { Link } from 'react-router-dom';
import {checkUser} from '../../../util/session_api_util'

class SignIn extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user:{
                email_or_phone: '',
                password: ''
            },
            errors:{
                email_or_phone: '',
                email: '',
                phone: '',
                password: '',
                emptyPassword: '',
            },
            user_exist:{
                exist: 0,
                email: '',
            },
        };


        this.handleFirstSubmit = this.handleFirstSubmit.bind(this);
        this.handleSecondSubmit = this.handleSecondSubmit.bind(this);
        this.backFirstSignIn = this.backFirstSignIn.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        const { user } = { ...this.state };
        const currentState = user;
    
        return (e) => {
            currentState[field] = e.target.value
            this.setState({user: currentState});
            }
    }

    handleFirstSubmit(e){
        e.preventDefault();
        let invalid_email_or_phone= "";
        let invalid_email = "";
        let invalid_phone = "";


        checkUser(this.state.user.email_or_phone).then((response)=>{
            
            if (response.exist=== 0) {
                if( /[a-zA-Z]/g.test(this.state.user.email_or_phone)){
                    invalid_email = (
                        <img id="incorrect-email" src={window.incorrect_email} alt="incorrect-email"/>
                        )
                }

                if(/\d/.test(this.state.user.email_or_phone)){
                    invalid_phone = (
                        <img id="incorrect-phone" src={window.incorrect_phone} alt="incorrect-phone"/>
                    )
                }
                if (this.state.user.email_or_phone === "") {
                    invalid_email_or_phone = <h5 className="input-error">! Enter your email or mobile phone number</h5>
                }
            }
        
            this.setState({
                errors: {
                    email_or_phone: invalid_email_or_phone,
                    email: invalid_email,
                    phone: invalid_phone,
                    password: this.state.errors.password,
                    emptyPassword: this.state.errors.emptyPassword
                }
            });

            
            // debugger
            this.setState({user_exist: response})
            }
        )
    }

    handleSecondSubmit(e) {
        e.preventDefault();
        let invalid_password = "";
        let empty_password = "";

        const user = Object.assign({}, this.state.user);
        this.props.signin(user).then(()=>(this.props.history.push('/')),
        ()=>{
            if(this.state.user.password === ""){
                empty_password = <h5 className="input-error">! Enter your password</h5>
            }else{
                invalid_password = <img id="incorrect-password" src={window.incorrect_password} alt="incorrect-password"/>
            }
            this.setState({
                errors: {
                    email_or_phone: this.state.errors.email_or_phone,
                    email: this.state.errors.email,
                    phone: this.state.errors.phone,
                    password: invalid_password ,
                    emptyPassword: empty_password
                }
            });

        });
    }

    backFirstSignIn(e) {
        e.preventDefault
        // debugger
        // const { user_exist } = { ...this.state };
        // debugger
        // const currentUser = user_exist;
        // debugger
        // user_exist[exist] = 0
        
        this.setState(
            {user_exist: {

                exist: 0,
                email: this.state.user_exist.email,
            }
        });
    }


    // renderErrors() {
    //     return(
    //       <ul className="errors">
    //         {this.props.errors.map((error, idx) => (
    //           <li key={`error-${idx}`}>❗{error} </li> ))}
    //       </ul>
    //     );
    //   }

    demoLogin(e) {
        e.preventDefault();
        this.props.signin({email_or_phone: 'amazen@gmail.com', password: 'amazenLover'})
            .then(() => this.props.history.push('/'));
    }

    render() {

        if(this.state.user_exist.exist === 0){

        const emailOrPhoneColor = (this.state.errors.email_or_phone !== "") ? "input-error" : null;

            return (
                <div>
                    <Link to="/"> 
                    <img id="amazen-logo" src={window.amazenLogo} alt="amazen logo"/>
                    </Link>
                    {this.state.errors.email}
                    {this.state.errors.phone}
                <div className="session-div">
                    {/* {this.renderErrors()} */}
                    <div className="signin-form">
                        <form  onSubmit={this.handleFirstSubmit} className="login-form-box">
                        <h1>Sign-In</h1> 
                        <div >
                            <label htmlFor="emailOrPhone">Email or mobile phone number:</label>
                            <input type="text"
                                className={emailOrPhoneColor}
                                id="emailOrPhone"
                                value={this.state.user.email_or_phone}
                                onChange={this.update('email_or_phone')}/>
                            
                            {this.state.errors.email_or_phone}

                            <input className="auth-btn" type="submit" value="Continue" />
                        </div>
                        </form>
                            <button className="auth-btn demo" onClick={this.demoLogin}> Demo User Sign In</button>
                            
                        <p id="notes">By creating an account, you agree to Amazen's <a href="https://github.com/Lijun-Gan/Amazen">conditions of User</a> and <a href="https://github.com/Lijun-Gan/Amazen">Privacy Notice</a> </p>
        
                        <a href="https://github.com/Lijun-Gan/Amazen">▸ Need help?</a>
                    </div>
                </div>
                <div className="signin-form-bottom">
                        <p id="newAmazen">------------------------------ New to Amazen? ---------------------------------</p>
                        <Link to="/signup">
                            <button  className="create-account-btn">Create your Amazen Account</button>
                        </Link>
                </div>

                <div id="auth-footnotes" >
                    <a href="https://github.com/Lijun-Gan/Amazen"> Conditions of User &nbsp;&nbsp;&nbsp;&nbsp; Privacy Notice &nbsp;&nbsp;&nbsp;&nbsp; Help</a>
                    <p> &nbsp; </p>
                    <p>© 2021, Amazen.com, inc. or its affiliates</p>
                </div>
                {/* <img id="auth-footnote" src={window.session_footnote} alt="signin-footnote"/> */}
                </div>
            );

        }else{
            const emptyPasswordColor = (this.state.errors.emptyPassword !== "") ? "input-error" : null;
   
            return (
                <div>
                <Link to="/"> 
                <img id="amazen-logo" src={window.amazenLogo} alt="amazen logo"/>
                </Link>
                {this.state.errors.password}
                <div className="session-div">
                {/* {this.renderErrors()} */}
                <div className="signin-form">
                    <form  onSubmit={this.handleSecondSubmit} className="login-form-box">
                    <h1>Sign-In</h1> 
                    <div id="exist-email">
                        <span>{this.state.user_exist.email}</span>
                        {/* <Link to="/signup"> Change</Link> */}
                        <button className="backFirstSignIn" onClick={this.backFirstSignIn}>&nbsp;Change</button>
                        
                    
                    </div>
                    
                    <div >

                        <span id="password-label" htmlFor="pw">Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Link to="/signup">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgot your password?</Link>

                        <input type="password"
                            className={emptyPasswordColor}
                            id="pw"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />

                        {this.state.errors.emptyPassword}

                        <input className="auth-btn" type="submit" value="Sign-In" />
                    </div>
                    </form>
                    <button className="auth-btn demo" onClick={this.demoLogin}> Demo User Sign In</button>
             
                    <span>&nbsp;&nbsp; ▢ Keep me signed in.</span>
                    <a href="https://github.com/Lijun-Gan/Amazen"> Detail ▾</a>
                </div>
                </div>
                <div id="auth-footnotes" >
                    <a href="https://github.com/Lijun-Gan/Amazen"> Conditions of User &nbsp;&nbsp;&nbsp;&nbsp; Privacy Notice &nbsp;&nbsp;&nbsp;&nbsp; Help</a>
                    <p> &nbsp; </p>
                    <p>© 2021, Amazen.com, inc. or its affiliates</p>
                </div>
                {/* <img id="auth-footnote" src={window.session_footnote} alt="signin-footnote"/> */}
                </div>
            );
        }
 
    }
}

export default SignIn;
