import React from 'react';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
    
    constructor(props) {

        super(props);
        this.state = {email_or_username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signin(user).then(()=>(this.props.history.push('/')));
    }

    renderErrors() {
        return(
          <ul className="errors">
            {this.props.errors.map((error, idx) => (
              <li key={`error-${idx}`}>❗{error} </li> ))}
          </ul>
        );
      }

    demoLogin(e) {
        e.preventDefault();
        this.props.signin({email_or_username: 'amazen@gmail.com', password: 'amazenLover'})
            .then(() => this.props.history.push('/'));
    }

render() {
        return (
        <div>
  
        <div className="session-div">
            {this.renderErrors()}
            <div className="signin-form">
                <form  onSubmit={this.handleSubmit} className="login-form-box">
                <h1>Sign-In</h1> 
                <div >
                    <label>Email or username:
                    <input type="text"
                        value={this.state.email_or_username}
                        onChange={this.update('email_or_username')}/>
                    </label>
        
                    <label>Password:
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                    </label>
            
                    <input className="auth-btn" type="submit" value="Sign-In" />
                </div>
                </form>
                    <button className="auth-btn demo" onClick={this.demoLogin}> Demo User Sign In</button>
       
                <p id="notes">By creating an account, you agree to Amazen's <a href="https://github.com/Lijun-Gan/Amazen">Condistions of User</a> and <a href="https://github.com/Lijun-Gan/Amazen">Privacy Notice</a> </p>
 
                <a id="notes" href="https://github.com/Lijun-Gan/Amazen">▸ Need help?</a>
            </div>
        </div>
        <div className="signin-form-bottom">
                <p>----------------------- New to Amazen? -----------------------</p>
                <Link to="/signup">
                    <button  className="signup-btn">Create your Amazen Account</button>
                </Link>
            </div>
            </div>
        );
    }
}

export default SignIn;
