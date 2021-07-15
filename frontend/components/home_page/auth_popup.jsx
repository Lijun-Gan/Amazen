import React from 'react';
import { Link } from 'react-router-dom';



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
                        <li><Link to="/wishlist" ><button >Check Wish List</button> </Link></li>
                        <li><Link to="/wishlist" ><button >Add Items To Cart From Wish List</button> </Link></li>
                        <li><Link to="/wishlist" ><button >Delete Items From Wish List</button> </Link></li>
                    </ul>
                    <ul className="popUp-list">
                        <h1>Your Account</h1>
                        {/* <li><a href="">Account</a></li>
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
                        <li><a href="">Register for a Business Account</a></li> */}
                
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/orders" >Orders</Link></li>
                        <li><Link to="/bookFilter/recommendations/Recommendation" > 
                            <button onClick={()=>(this.props.fetchBooksRecommendation())}>Recommendations</button>
                        </Link></li>
                        <li><Link to="/contact" >Customer Service</Link></li>
                        <li><Link to="/wishlist">Wish List</Link></li>
                        <li><Link to="/cart" >Shopping Carts </Link></li>
                        <li><Link to="/bookFilter/primes/Prime" > 
                            <button onClick={()=>(this.props.fetchBooksPrime())}>Prime</button>
                        </Link></li>
                        <li><Link to="/bookFilter/discounts/Discount" onClick={()=>(this.props.fetchBooksDiscount())} > 
                            <button>Today's Deals</button>
                        </Link></li>
                        <li><Link to="/bookFilter/format/Kindle" > 
                            <button onClick={()=>(this.props.fetchBooksFormat("Kindle"))}>Kindle</button>
                        </Link></li>
                        <li><Link to="/bookFilter/format/Audiobook" > 
                            <button onClick={()=>(this.props.fetchBooksFormat("Audiobook"))}>Audiobook</button>
                        </Link></li>
                        <li> <Link to="/bookFilter/format/Paperback" > 
                            <button onClick={()=>(this.props.fetchBooksFormat("Paperback"))}>Paperback</button>
                        </Link></li>
                        <li><Link to="/bookFilter/format/Audio CD" > 
                            <button onClick={()=>(this.props.fetchBooksFormat("Audio CD"))}>Audio CD</button>
                        </Link></li>
                        <li><Link to="/bookFilter/format/Hardcopy" > 
                            <button onClick={()=>(this.props.fetchBooksFormat("Hardcopy"))}>Hardcopy</button>
                        </Link></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/lijun-gan/">Amazen Developer's LinkedIn</a></li>
                        <li> <a target="_blank" href="https://github.com/Lijun-Gan">Amazen Developer's GitHub</a></li>
                        <li>
                            {/* <Link to="/signin">  */}
                            <button onClick={()=>{ this.props.push('/signup')}}>Create an New Account</button>
                        {/* </Link> */}
                        </li>
                   
                       
                    </ul>


                </ul>

         
        )
    }
    
    render() {
        const signin = () => (
            <nav className="outerpopUp">
                <button onClick={this.handleSign} id="topbutton"><div id='toppopUp'>Hello, Sign in</div>
                    <div id='bottompopUp'> Account & Lists <span className="flag-arrow">▾ </span> </div>
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
                    <h2 id="popUping">Hello, {this.props.currentUser.full_name ? this.props.currentUser.full_name.split(" ")[0] : this.props.currentUser.username}</h2>
                    <div id='loginpopUp'>Account & Lists <span className="flag-arrow">▾ </span></div>
                </button>
                    
                    <div className="popUp">
                        <ul className="popUp-links">
                            <ul className="popUp-shopping-list">
                                <h1>Your Lists</h1>
                                {/* <li id="shopping-list-border"><a href="" >Wish List</a></li> */}
                                <li id="shopping-list-border"><Link to="/wishlist" ><button >Wish List</button> </Link></li>
                                {/* <li><a href="">Create a List</a></li> */}
                                <li><Link to="/wishlist" ><button >Check Wish List</button> </Link></li>
                                <li><Link to="/wishlist" ><button >Add Items To Cart From Wish List</button> </Link></li>
                                <li><Link to="/wishlist" ><button >Delete Items From Wish List</button> </Link></li>
                            </ul>   
                            <ul className="popUp-list">
                                <h1>Your Account</h1>
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/orders" >Orders</Link></li>
                                <li><Link to="/bookFilter/recommendations/Recommendation" > 
                                    <button onClick={()=>(this.props.fetchBooksRecommendation())}>Recommendations</button>
                                </Link></li>
                                <li><Link to="/contact" >Customer Service</Link></li>
                                <li><Link to="/wishlist">Wish List</Link></li>
                                <li><Link to="/cart" >Shopping Carts </Link></li>
                                <li><Link to="/bookFilter/primes/Prime" > 
                                    <button onClick={()=>(this.props.fetchBooksPrime())}>Prime</button>
                                </Link></li>
                                <li><Link to="/bookFilter/discounts/Discount" onClick={()=>(this.props.fetchBooksDiscount())} > 
                                    <button>Today's Deals</button>
                                </Link></li>
                                <li><Link to="/bookFilter/format/Kindle" > 
                                    <button onClick={()=>(this.props.fetchBooksFormat("Kindle"))}>Kindle</button>
                                </Link></li>
                                <li><Link to="/bookFilter/format/Audiobook" > 
                                    <button onClick={()=>(this.props.fetchBooksFormat("Audiobook"))}>Audiobook</button>
                                </Link></li>
                                <li> <Link to="/bookFilter/format/Paperback" > 
                                    <button onClick={()=>(this.props.fetchBooksFormat("Paperback"))}>Paperback</button>
                                </Link></li>
                                <li><Link to="/bookFilter/format/Audio CD" > 
                                    <button onClick={()=>(this.props.fetchBooksFormat("Audio CD"))}>Audio CD</button>
                                </Link></li>
                                <li><Link to="/bookFilter/format/Hardcopy" > 
                                    <button onClick={()=>(this.props.fetchBooksFormat("Hardcopy"))}>Hardcopy</button>
                                </Link></li>
                                <li><a target="_blank" href="https://www.linkedin.com/in/lijun-gan/">Amazen Developer's LinkedIn</a></li>
                                <li><a target="_blank" href="https://github.com/Lijun-Gan">Amazen Developer's GitHub</a></li>
                                <li>
                                    {/* <Link to="/signin">  */}
                                    <button onClick={()=>{ this.props.signout().then(() => this.props.push('/signup'))}}>Create an New Account</button>
                                {/* </Link> */}
                                </li>
                                <li><button onClick={this.handleClick}>Sign Out</button></li>
                            </ul>
                    
                        
                        </ul>
                   
                    </div>
            
            </header>
            
        )

    return this.props.currentUser.username ? welcome() : signin();
    }
};


export default AuthPopup;