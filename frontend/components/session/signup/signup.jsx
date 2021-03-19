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
                matchPassword: ''
            }
           
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
            invalid_username = <h4 className="no-entry">! Enter your name</h4>
            errors_count++;
        }

        let email = this.state.user.email
        if(!(email.includes("@") && email.includes(".") && email.split("@")[0].length>0 &&email.split("@")[1].length>3  &&email.split("@")[1].split(".")[0].length>0 &&email.split("@")[1].split(".")[1].length> 1)){
            invalid_email = <h4 className="no-entry">! Enter a valid email address</h4>
            errors_count++;
        }

        if (this.state.user.email === "") {
            invalid_email = <h4 className="no-entry">! Enter your email</h4>
            errors_count++;
        }

        if (this.state.user.password === "") {
            invalid_password = <h4 className="no-entry">! Enter your password</h4>
            errors_count++;
        } else if (this.state.user.password.length < 6) {
            invalid_password = <h4 className="no-entry">! Passwords must be at least 6 characters.</h4>
            errors_count++;
        }

        if (this.state.user.password !== "" && this.state.user.rePassword === "") {
            invalid_rePassword = <h4 className="no-entry">! Type your password again</h4>
            errors_count++;
        } else if (this.state.user.rePassword !== this.state.user.password) {
            diff_password = <h4 className="no-entry">! Passwords must match</h4>
            errors_count++;
        }


        this.setState({
            errors: {
                username: invalid_username,
                email: invalid_email,
                password: invalid_password,
                rePassword: invalid_rePassword,
                matchPassword:diff_password
            }
        });

        if (errors_count === 0) {
            this.props.signup(this.state.user)
                .then( ()=> this.props.history.push("/") );
        }

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
                            id="username"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />

                        
                        {this.state.errors.username}
                       
                
                        <label htmlFor="email">Email:</label>
                        <input type="text"
                            id="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                        
                        {this.state.errors.email}

                        <label htmlFor="pw">Password:</label>
                        <input type="password"
                            id="pw"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="At least 6 characters"
                            />

                        {this.state.errors.password}

                        <div className="pw-alert-container">
                            <img id="pwAlert-icon" src={window.pwAlert} alt="password alert"/>
                            <p id="notes">Password must be at least 6 characters.</p>
                        </div>

                        <label htmlFor="repw"> Re-enter password:</label>
                            <input type="password"
                                id="repw"
                                value={this.state.rePassword}
                                onChange={this.update('rePassword')}
                            />
                        
                        {this.state.errors.rePassword}
                        {this.state.errors.matchPassword}


                        <input className="auth-btn" type="submit" value="Create your Amazen account" />
                    </div>
                    </form>
        
                    <p id="notes">By creating an account, you agree to Amazen's <a href="https://github.com/Lijun-Gan/Amazen">Condistions of User</a> and <a href="https://github.com/Lijun-Gan/Amazen">Privacy Notice</a> </p>
                
                    <p id="notes">-------------------------------------------------------------------------</p>
                    <span id="notes">Already have an account? </span> 
                    <Link to="/signin" id="notes">Sign-In ▸</Link>
                </div>
            </div>
        </div>
    
        );
    }
}

export default SignUp;
