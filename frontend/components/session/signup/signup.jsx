import React from 'react';
import { Link } from 'react-router-dom';
// import icom from "../../../../app/assets/images"
// import ('../../../../app/assets/images/alert-icon.png')

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
            username: '',
            email: '',
            password: '',
            rePassword: ''},
            errors: {
            repwError: null,
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
  }

    update(field) {
        return (e) => this.setState({
            user:{

                [field]: e.target.value
            }
        });
    }

    handleSubmit(e) {
        // let repwError = null;
        e.preventDefault();
        if (this.state.password != this.state.rePassword){
            this.state.errors.repwError = <p>! passwords must match</p>
        }else{
            const user = Object.assign({}, this.state);
            this.props.signup(user).then(()=>(this.props.history.push('/')));
        }
    }

    renderErrors() {
        return(
          <ul className="errors">
            {this.props.errors.map((error, idx) => (
              <li key={`error-${idx}`}>❗{error} </li> ))}
          </ul>
        );
      }


    render() {
        return (

        <div>
            <Link to="/"> 
                <img id="amazen-logo" src={window.amazenLogo} alt="amazen logo"/>
            </Link>
            <div className="session-div">
                {this.renderErrors()}
            
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
                       
                
                        <label htmlFor="email">Email:</label>
                        <input type="text"
                            id="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                        
        
                        <label htmlFor="pw">Password:</label>
                        <input type="password"
                            id="pw"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="At least 6 characters"
                            />

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
                            {repwError}
                        

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
