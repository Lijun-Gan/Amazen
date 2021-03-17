import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
  }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user).then(()=>(this.props.history.push('/')));
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
        <div className="session-div">
            {this.renderErrors()}
         
            <div className="signup-form">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                <h1>Create account</h1>  
                
                <div >
                    <label> Your name 
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        size="100"
                    />
                    </label>
            
                    <label>Email:
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        size="50"
                    />
                    </label>
       
                    <label >Password:
                    <input type="password"
                        id="password-note"
                        value={this.state.password}
                        onChange={this.update('password')}
                        placeholder="At least 6 characters"
                    />
                    </label>
                   
                    <p id="notes">💡 Password must be at least 6 characters.</p>
       
                    <input className="auth-btn" type="submit" value="Create your Amazen account" />
                </div>
                </form>
     
                <p id="notes">By creating an account, you agree to Amazen's <a href="https://github.com/Lijun-Gan/Amazen">Condistions of User</a> and <a href="https://github.com/Lijun-Gan/Amazen">Privacy Notice</a> </p>
               
                <p id="notes">-------------------------------------------------------------------------</p>
                <span id="notes">Already have an account? </span> 
                <Link to="/signin" id="notes">Sign-In ▸</Link>
            </div>
        </div>
        );
    }
}

export default SignUp;
