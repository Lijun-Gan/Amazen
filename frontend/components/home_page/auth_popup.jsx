import React from 'react';
import { Link } from 'react-router-dom';
import {signout} from '../../actions/session_actions'


class AuthPopup extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleSign = this.handleSign.bind(this)
    }

    handleClick(e){
        e.preventDefault()

        this.props.signout().then(() => this.props.push('/signin'))
        // signout().then(() => this.props.push('/signin'))
        // this.props.signout();
        // this.props.push('/signout');
    }

    handleSign(e) {
        this.props.push('/signin')
    }

    accountRender(){
        return (
            
                <ul className="popUp-links">
                    <ul className="popUp-shopping-list">
                        <h1>Your Lists</h1>
                        <li><a href="">Create a List</a></li>
                        <li><a href="">Find a List or Registry</a></li>
                        <li><a href="">AmazonSmile Charity Lists</a></li>
                    </ul>
                    <ul className="popUp-list">
                        <h1>Your Account</h1>
                        <li><a href="">Account</a></li>
                        <li><a href="">Orders</a></li>
                        <li><a href="">Recommendations</a></li>
                        <li><a href="">Browsing History</a></li>
                        <li><a href="">Watchlist</a></li>
                        <li><a href="">Video Purchases & Rentals</a></li>
                        <li><a href="">Kindle Unlimited</a></li>
                        <li><a href="">Content & Devices</a></li>
                        <li><a href="">Subscribe & Saved Items</a></li>
                        <li><a href="">Membership & Subscriptions</a></li>
                        <li><a href="">Prime Membership</a></li>
                        <li><a href="">Amazon Credit Cards</a></li>
                        <li><a href="">Music Library</a></li>
                        <li><a href="">Start a Selling Account</a></li>
                        <li><a href="">Register for a Business Account</a></li>
                       
                    </ul>


                </ul>

         
        )
    }
    
    render() {
        const signin = () => (
            <nav className="outerpopUp">
                <button onClick={this.handleSign} id="topbutton"><div id='toppopUp'>Hello, Sign in</div>
                    <div id='bottompopUp'> Account & Lists ▾ </div>
                </button>
                <div className="popUp">
                    <ul className="outer-popUp-links">
                        <li><Link to="/signin" id="popUp-signin"><button>Sign in</button></Link></li>
                        <li id="new-customer"><p>New customer?<Link to="/signup" id="start-link">Start here.</Link></p></li>
                    </ul>
                    {this.accountRender()}
                </div>
            </nav>
        );
        const welcome = () => (
            
            <header className="nav-group">
                <button className="header-button">
                    <h2 id="popUping">Hello, {this.props.currentUser}</h2>
                    <div id='loginpopUp'>Account & Lists ▾ </div>
                </button>
                    
                    <div className="popUp">
                        <ul className="popUp-links">
                            <ul className="popUp-shopping-list">
                                <h1>Your Lists</h1>
                                <li id="shopping-list-border"><a href="" >Shopping List</a></li>
                                <li><a href="">Create a List</a></li>
                                <li><a href="">Find a List or Registry</a></li>
                                <li><a href="">AmazonSmile Charity Lists</a></li>
                            </ul>   
                            <ul className="popUp-list">
                                <h1>Your Account</h1>
                                <li><Link to="/profile">Profile</Link></li>
                                {/* <li><a href="">Account</a></li> */}
                                <li><a href="">Orders</a></li>
                                <li><a href="">Recommendations</a></li>
                                <li><a href="">Browsing History</a></li>
                                <li><Link to="/wishlist">Wish List</Link></li>
                                {/* <li><a href="">Watchlist</a></li> */}
                                <li><a href="">Video Purchases & Rentals</a></li>
                                <li><a href="">Kindle Unlimited</a></li>
                                <li><a href="">Content & Devices</a></li>
                                <li><a href="">Subscribe & Saved Items</a></li>
                                <li><a href="">Membership & Subscriptions</a></li>
                                <li><a href="">Prime Membership</a></li>
                                <li><a href="">Amazon Credit Cards</a></li>
                                <li><a href="">Music Library</a></li>
                                <li><a href="">Start a Selling Account</a></li>
                                <li><a href="">Register for a Business Account</a></li>
                                <li><a href="">Switch Accounts</a></li>
                                <li><a href="" onClick={this.handleClick}>Sign Out</a></li>
                            </ul>
                    
                        
                        </ul>
                   
                    </div>
            
            </header>
            
        )

    return this.props.currentUser ? welcome() : signin();
    }
};


export default AuthPopup;