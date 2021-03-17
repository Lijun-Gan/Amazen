import React from 'react';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email_or_username: '',
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

        this.props.signin(user).then(()=>(this.props.history.push('/books')));
    }

    render() {
        return (
        <div >
            <form onSubmit={this.handleSubmit} className="login-form-box">
             Create account
            <br/>
            <div >
                <label>Email or username:
                <input type="text"
                    value={this.state.email_or_username}
                    onChange={this.update('email_or_username')}
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
                <input type="submit" value="Sign-In" />
            </div>
            </form>
            <br/>
            <p>By creating an account, you agree to Amazon's</p>
            <p>Condistions of User and Privacy Notice</p>
            <br/>
            <br/>
            <span>Does not have an account?</span> 
            <Link to="/signup">Sign-Up ▸</Link>
        </div>
        );
    }
}

export default SignIn;
