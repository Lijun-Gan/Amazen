import React from 'react';
import { Link } from 'react-router-dom';

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
        debugger
        this.props.signup(user).then(()=>(this.props.history.push('/books')));
    }

    render() {
        return (
        <div >
            <form onSubmit={this.handleSubmit} className="login-form-box">
             Create account
            <br/>
            <div >
                <label>Your name:
                <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                />
                </label>
                <br/>
                <label>Email:
                <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                />
                </label>
                <br/>
                <label>Password:
                <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="At least 6 characters"
                />
                </label>
                <p>Password must be at least 6 characters.</p>
                <br/>
                <input type="submit" value="Create your Amazen account" />
            </div>
            </form>
            <br/>
            <p>By creating an account, you agree to Amazon's</p>
            <p>Condistions of User and Privacy Notice</p>
            <br/>
            <br/>
            <span>Already have an account?</span> 
            <Link to="/signin">Sign-In ▸</Link>
        </div>
        );
    }
}

export default SignUp;
