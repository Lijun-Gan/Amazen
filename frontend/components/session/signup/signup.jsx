import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{
                username: '',
                email: '',
                password: '',
                rePassword: ''
            },
            errors: {
                username: '',
                email: '',
                password: '',
                rePassword: '',
                matchPassword: '',
                emailTaken: '',
            }
           
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.backFirstSignUp = this.backFirstSignUp.bind(this);
  }

  update(field) {

    const { user } = { ...this.state };
    const currentState = user;

    return (e) => {
        currentState[field] = e.target.value
        this.setState({user: currentState});
        }
    }

    handleSubmit(e) {

        e.preventDefault();
        let errors_count = 0;
        let invalid_username = "";
        let invalid_email = "";
        let invalid_password = "";
        let invalid_rePassword = "";
        let diff_password = "";

        if (this.state.user.username === "") {
            invalid_username = <h5 className="input-error">❗ Enter your name</h5>
            errors_count++;
        }

        let email = this.state.user.email
        if(!(email.includes("@") && email.includes(".") && email.split("@")[0].length>0 &&email.split("@")[1].length>3  &&email.split("@")[1].split(".")[0].length>0 &&email.split("@")[1].split(".")[1].length> 1)){
            invalid_email = <h5 className="input-error">❗ Enter a valid email address</h5>
            errors_count++;
        }

        if (this.state.user.email === "") {
            invalid_email = <h5 className="input-error">❗ Enter your email</h5>
            errors_count++;
        }

        if (this.state.user.password === "") {
            invalid_password = <h5 className="input-error">❗ Enter your password</h5>
            errors_count++;
        } else if (this.state.user.password.length < 6) {
            invalid_password = <h5 className="input-error">❗ Passwords must be at least 6 characters.</h5>
            errors_count++;
        }

        if (this.state.user.password !== "" && this.state.user.rePassword === "") {
            invalid_rePassword = <h5 className="input-error">❗ Type your password again</h5>
            errors_count++;
        } else if (this.state.user.rePassword !== this.state.user.password) {
            diff_password = <h5 className="input-error">❗ Passwords must match</h5>
            errors_count++;
        }


        this.setState({
            errors: {
                username: invalid_username,
                email: invalid_email,
                password: invalid_password,
                rePassword: invalid_rePassword,
                matchPassword:diff_password,
                emailTaken: this.state.errors.emailTaken
            }
        });

        if (errors_count === 0) {
            this.props.signup(this.state.user)
                .then( ()=> this.props.history.push("/"), (response)=>{
                    if(response.errors.includes("Email has already been taken")){
                        this.setState({
                            errors: {
                                username: this.state.errors.username,
                                email: this.state.errors.email,
                                password: this.state.errors.password,
                                rePassword: this.state.errors.rePassword,
                                matchPassword:this.state.errors.matchPassword,
                                emailTaken: "Email address already in use"
                            }
                        });
                    }
                } );
        }

    }

    backFirstSignUp(e) {
        e.preventDefault

        this.setState(
            {errors: {
                username: '',
                email: '',
                password: '',
                rePassword: '',
                matchPassword: '',
                emailTaken: '',
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


    render() {

        const passwordHint = (

            <div className="pw-alert-container">
                <img id="pwAlert-icon" src={window.pwAlert} alt="password alert"/>
                <p id="notes">Password must be at least 6 characters.</p>
            </div>
        )

        const usernameColor = (this.state.errors.username !== "") ? "input-error" : null;
        const emailColor = (this.state.errors.email !== "") ? "input-error" : null;
        const passwordColor = (this.state.errors.password !== "") ? "input-error" : null;
        const rePasswordColor = (this.state.errors.rePassword !== "") ? "input-error" : null;
        
        if(this.state.errors.emailTaken === ""){
            return (

        <div>
            <Link to="/"> 
                <img id="amazen-logo" src={window.amazenLogo} alt="amazen logo"/>
            </Link>
            <div className="session-div">

                {/* {this.renderErrors()} */}
            
                <div className="signup-form">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1>Create account</h1>  
                    
                    <div >
                        <label htmlFor="username"> Your name </label>
                        <input type="text"
                            className={usernameColor}
                            id="username"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />

                        
                        {this.state.errors.username}
                       
                
                        <label htmlFor="email">Email:</label>
                        <input type="text"
                            className={emailColor}
                            id="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                        
                        {this.state.errors.email}

                        <label htmlFor="pw">Password:</label>
                        <input type="password"
                            className={passwordColor}
                            id="auth-pw"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="At least 6 characters"
                            />

                        {this.state.errors.password !== "" ? this.state.errors.password : passwordHint}



                        <label htmlFor="repw"> Re-enter password:</label>
                            <input type="password"
                                className={rePasswordColor}
                                id="repw"
                                value={this.state.rePassword}
                                onChange={this.update('rePassword')}
                            />
                        
                        {this.state.errors.rePassword}
                        {this.state.errors.matchPassword}


                        <input className="auth-btn" type="submit" value="Create your Amazen account" />
                    </div>
                    </form>
        
                    <p id="notes" >By creating an account, you agree to Amazen's <a href="https://github.com/Lijun-Gan/Amazen">conditions of User</a> and <a href="https://github.com/Lijun-Gan/Amazen">Privacy Notice</a> </p>
                
                    <div className="fade_rule"></div>  

                    <span id="notes">Already have an account? </span> 
                    <Link to="/signin" id="notes">Sign-In ▸</Link>
                    <p></p>
                    <span id="notes">Purchasing for work? </span> 
                    <Link to="" id="notes">Create a business account ▸</Link>
                </div>
            </div>
        
        <div id="auth-footnotes" >
            <a target="_blank" href="https://github.com/Lijun-Gan/Amazen"> Conditions of User &nbsp;&nbsp;&nbsp;&nbsp; Privacy Notice &nbsp;&nbsp;&nbsp;&nbsp; Help</a>
            <p> &nbsp; </p>
            <p>© 2021, Amazen.com, inc. or its affiliates</p>
        </div>

        </div>
    
        );}else{
            return(
                <div>
            <Link to="/"> 
                <img id="amazen-logo" src={window.amazenLogo} alt="amazen logo"/>
            </Link>

                <div className="email-taken-alert" >
                    {/* <img src={window.email_taken} alt="email address already in use"/> */}

                    <img id="yellowWarn" src={window.window.yellowWarn} alt="email address already in use"/>
            
                    <span>
                        <p id="emailBadBig">Email address already in use</p>
                        <p id="emailBad">You indicated you are a new customer, but an account already exists with the e-mail</p>
                        <p className="sign-up-email-taken"> {this.state.user.email}</p>
                    </span>
                  
                </div>

            <div className="session-div email-taken">

                {/* {this.renderErrors()} */}
       
                <div className="email-taken-info">
                   
                    <h3>Are you a returning customer?</h3>  
                    <Link to="/signin" id="notes">Sign-In</Link>
                    <p></p>
                    <Link to="/signin" id="notes">forgot your password?</Link>
                    
                    {/* <p><Link to="/signup">Forgot your password?</Link></p> */}
                    

                    <p></p>
                
                    <h3>New to Amazon.com?</h3> 
                    <span>Create a new account with</span>
                    <button className="backFirstSignIn" onClick={this.backFirstSignUp}>&nbsp;a different e-mail address</button>
                    
                    <p></p>

                    <span>Create a new account with</span>
                    <button className="backFirstSignIn" onClick={this.backFirstSignUp}>&nbsp;this e-mail address</button>

                    <p></p>

                    <h3>Still need help?</h3>
                    <a target="_blank" href="https://github.com/Lijun-Gan/Amazen">Contact Customer Service</a>
                    
                </div>
            </div>
            {/* <img id="auth-footnote" src={window.session_footnote} alt="signin-footnote"/> */}
        
        <div id="auth-footnotes" >
            <a target="_blank" href="https://github.com/Lijun-Gan/Amazen"> Conditions of User &nbsp;&nbsp;&nbsp;&nbsp; Privacy Notice &nbsp;&nbsp;&nbsp;&nbsp; Help</a>
            <p> &nbsp; </p>
            <p>© 2021, Amazen.com, inc. or its affiliates</p>
        </div>

        </div>
            )

        }
    }
}

export default SignUp;
