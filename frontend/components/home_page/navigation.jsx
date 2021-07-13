import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './nav_bar/search_bar_container'
import AuthPopUp from './auth_popup';
import checkZipCode from './nav_bar/checkZipCode';

//{ currentUser, signout }

// const NavBar = (props) => {

  // let quantity = 0;
  // let username;
  // if(props.username === undefined || props.cartsBook === null || props.cartsBook.length === 0 ){
  // if(props.cartsBook.length === 0 ){
  //   
  //   username = "";
  // }else{
 
  //    
  //   username = props.username;
  //   const {cartsBook} = props
  //   // let cartsBook = Object.values(props.cartsBook)
  //     if(cartsBook.length > 0){

  //       cartsBook.forEach(book => {
  //           quantity = quantity + Number(book.quantity);
  //       });
  //     }

  // }  
  
  // let books = JSON.parse(localStorage.getItem(props.user.id))
  // cartsBook = Object.values(cartsBook)
  
  class NavBar extends React.Component {
    constructor(props) {
      super(props);

      this.state = ({
        showPopup: false,
        city: "",
        zip_code: "",
        zip_code_err: "",
        default: "Select your address",
        changed : this.props.user.city ? true : false,
      })

      this.handleUpdate = this.handleUpdate.bind(this)
      this.togglePopup = this.togglePopup.bind(this)
      this.handleApply = this.handleApply.bind(this)
      this.handleChange = this.handleChange.bind(this)

    }

    togglePopup() {
      this.setState({
          showPopup: !this.state.showPopup,
          zip_code: "",
          zip_code_err: "",
          changed: (this.props.user.city || this.state.default !== "Select your address") ? true : this.state.changed
      });
  }

  handleApply(e){


    e.preventDefault()
    let invalid_zip_code = "";
 

    if(this.state.zip_code === "" || this.state.zip_code.length < 3 ){
      invalid_zip_code = <h5 className="nav-input-error">❗ Please enter a valid US zip code</h5>
    
    }else{

        const returnCity = checkZipCode(this.state.zip_code)
        if(returnCity){
          if(this.props.user.username){
            
            this.props.updateZipCode({city: returnCity, zip_code: this.state.zip_code })
          }
            this.setState({
              city: returnCity,
              default: returnCity + " " + this.state.zip_code,
              changed: true
            })
         
        }else{
          invalid_zip_code = <h5 className="nav-input-error">❗ Please enter a valid US zip code</h5>
        }

    }

    this.setState({
      zip_code_err : invalid_zip_code
    })


  }

   handleUpdate(e){

    this.setState({
      zip_code: e.target.value 
    })
    
  }

   handleChange(e){

    this.setState({
      changed: false,
      zip_code: this.props.user.zip_code || this.state.default.split(" ").slice(-1)[0],
    })
    
  }


    // componentDidMount() {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     console.log("Latitude is :", position.coords.latitude);
    //     console.log("Longitude is :", position.coords.longitude);
    //   });

// });
    
    // }
  
  render(){
    
    let numBooksInCart = {
      "position": "relative",
      fontSize: "18px",
      marginTop: "5px",
      "color": "#f08804",
      zIndex: "2"
    };

    if (this.props.quantity < 10) {
        numBooksInCart["left"] = "30px";
    } else if (this.props.quantity < 20) {
        numBooksInCart["left"] = "34px";
    } else {
        numBooksInCart["left"] = "36px";
    }

    const { user } = this.props

    return (

      <div id="nav-bar-container">

      <div id='nav-bar-top'>

          <div className="nav-top-left">

            <Link to="/"> 
              <img id="nav-amazen-logo" onClick={()=>(this.props.fetchBooks())} src={window.nav_amazenLogo} alt="amazen logo"/>
            </Link>
            

            <div className="nav-search-bar-container-outer">

            <div className="location-container">

            <img className="location-icon" src={ window.location_icon} alt="location" />
            </div>
            {/* <span className="material-icons loc">room</span> */}
              <button className="nav-address-container" onClick={this.togglePopup.bind(this)}>
                <p className="nav-address"> {user.username ? "Deliver to " + (user.full_name ? user.full_name.split(" ")[0] : user.username) : "Hello" }</p> 
                <p className="nav-address-select">{user.city && user.zip_code ? user.city + " " + user.zip_code : this.state.default} </p>
            </button>

            {this.state.showPopup ? 
            (

                <div className='nav-popup'>
                <div className='nav-popup_inner'>
                  {/* {this.state.invalidPassword} */}
                        <p className="location-header">Choose your location </p>
                
                <section className="location-padding">
                  <div className="pop-user">

                   
                    <div>
                        
                        <p className="delivery-options">Delivery options and delivery speeds may vary for different locations</p>
                        
                        { user.city ?
                          <div className="nav-username-container">
                            <span className="username-bold">{user.full_name || user.username}</span>
                            <span> ----- {user.city + " " + user.zip_code}</span>

                          </div>
                          : ( user.username ? null
                           : <button className="signin-address-btn" onClick={()=>this.props.history.push('signin')}> Sign in to see your address</button>)
                        }
                    </div>

                  </div>

                    <div >

                      <h2 className="crossline"><span id="wl-end-list">enter a US zip code</span></h2>
                     
                     { (this.state.changed )?
                      <div className="nav-display-flex">
                         <p className="deliver-to">Deliver to </p>
                          <p className="deliver-to-code">{  ( this.state.default !== "Select your address" ? this.state.default.split(" ").slice(-1)[0] : null) || user.zip_code || this.state.zip_code}</p>
                         <button className="handle-change-btn" onClick={this.handleChange}>Change</button>

                      </div>
                        
                        : <form  onSubmit={this.handleApply} className="nav-pop-form">
                        


                            <input type="text"
                      
                                id="zip-code"
                                value={ this.state.zip_code }
                                onChange={this.handleUpdate}
                                maxLength="5"
                            />
                            <button className="pop-apply-btn" type="submit" >Apply</button>
                            {/* <input className="pop-apply-btn" type="submit" value="Apply" /> */}

                            {this.state.zip_code_err}
                            {/* <br/> */}
                        </form>
                        } 

                            <button onClick={this.togglePopup} className="nav-close-pop">Done</button>
                                
                    </div>

                  </section>
                </div>
              </div>
            )
          : null
        }
            {/* end */}
            </div>

          </div>

          <SearchBarContainer />

          <div className="nav-top-right">

            <div className="flag-arrow-div">
                {/* <button className="flag">🇱🇷 </button> */}
                <img className="us-flag" src={window.usFlag} alt="US Flag" />
                <span className="flag-arrow">▾</span>
                
                <div className="flag-arrow-pop">
                    {/* <input type="radio" checked="true"/> */}
                    <input type="radio" defaultChecked/>
                    <p className="language">English - EN</p> 
                    <p className="languge-line"></p>
                    <p className="after-languge-line">🇱🇷 You are shopping on Amazen.com.</p>
                </div>
            </div>
      
            {/* <NavSigninContainer /> */}
            <AuthPopUp id='popUp' currentUser={this.props.user} 
            signout={this.props.signout} 
            push={this.props.history.push}
            fetchBooksRecommendation={this.props.fetchBooksRecommendation}
            fetchBooksPrime={this.props.fetchBooksPrime}
            fetchBooksFormat={this.props.fetchBooksFormat}
            fetchBooksDiscount={this.props.fetchBooksDiscount}
            />                        

            {/* <button className="nav-returns"> */}
            <Link to="/orders" className="nav-returns">
            <span className="nav-signin">Returns </span> 
            <p className="nav-signin"> & Orders</p>
            </Link>
            {/* </button> */}

                    <Link to="/cart" id="cart">
                        <h5 style={numBooksInCart}>{this.props.quantity}</h5>
                        <img src={window.cart} alt="cart" />
                    </Link>

          </div>

      </div>


      <div id='nav-bar-mid'>

        <div className="nav-mid-all-container" >
          <Link to="/">
          <img id="nav-mid-all" src={window.all_icon} alt="middle nav"/>
          <span className="word-all">&nbsp;All</span>
          </Link>
        </div>

        <div id="nav-mid-container"> 
            {/* <button className="sub-nav xxsm">Best Sellers</button> */}
            <Link to="/profile" >
              <button className="sub-nav xxsm">Profile</button>
            </Link>
            <Link to="/bookFilter/discounts/Discount" onClick={()=>(this.props.fetchBooksDiscount())} > 
              <button className="sub-nav xxsm" >Today's Deals</button>
            </Link>
            {/* <button className="sub-nav xsm">Prime</button> */}

            <Link to="/bookFilter/primes/Prime" > 
              <button className="sub-nav xxsm" onClick={()=>(this.props.fetchBooksPrime())}>Prime</button>
            </Link>

            <Link to="/wishlist" >
              <button className="sub-nav xxsm">Wish List</button>
            </Link>

            <Link to="/contact" >
              <button className="sub-nav xxsm">Customer Service</button>
            </Link>

            <Link to="/bookFilter/format/Kindle" > 
              <button className="sub-nav xsm" onClick={()=>(this.props.fetchBooksFormat("Kindle"))}>Kindle</button>
            </Link>
            {/* <button className="sub-nav sm" onClick={()=>(props.history.push("/bookFilter/format/Kindle"))}>Kindle</button> */}
            <Link to="/bookFilter/format/Audiobook" > 
            <button className="sub-nav sm" onClick={()=>(this.props.fetchBooksFormat("Audiobook"))}>Audiobook</button>
          </Link>
            {/* <button className="sub-nav sm" onClick={()=>(props.history.push("/bookFilter/format/Audiobook"))}>Audiobook</button> */}
            <Link to="/bookFilter/format/Paperback" > 
            <button className="sub-nav md" onClick={()=>(this.props.fetchBooksFormat("Paperback"))}>Paperback</button>
          </Link>
            {/* <button className="sub-nav md" onClick={()=>(props.history.push("/bookFilter/format/Paperback"))}>Paperback</button> */}
            <Link to="/bookFilter/format/Audio CD" > 
            <button className="sub-nav md" onClick={()=>(this.props.fetchBooksFormat("Audio CD"))}>Audio CD</button>
          </Link>
            {/* <button className="sub-nav md" onClick={()=>(props.history.push("/bookFilter/format/Audio CD"))}>Audio CD</button> */}
            <Link to="/bookFilter/format/Hardcopy" > 
            <button className="sub-nav lg" onClick={()=>(this.props.fetchBooksFormat("Hardcopy"))}>Hardcopy</button>
            </Link>
            {/* <button className="sub-nav md" onClick={()=>(props.history.push("/bookFilter/format/Hardcopy"))}>Hardcopy</button> */}

            <Link to="/bookFilter/recommendations/Recommendation" > 
            <button className="sub-nav lg" onClick={()=>(this.props.fetchBooksRecommendation())}>Recommendations</button>
            {/* <button className="sub-nav md" onClick={()=>null}>Recommendations</button> */}
            </Link>

            <Link to="/" > 
            {/* <button className="sub-nav md" onClick={()=>(props.fetchBooks())}>Books</button> */}
            <button className="sub-nav xlg" >Books</button>
            </Link>

            <Link to="/cart" >
            <button className="sub-nav xlg">Shopping Carts</button>
            </Link>
            <Link to="/orders" >
            <button className="sub-nav xlg">Orders</button>
            </Link>

            <Link to="/bookFilter/bookBoxs/Book Box" > 
            <button className="sub-nav xxlg" onClick={()=>(this.props.fetchBookBox())}>Book Box</button>
            </Link>

            <Link to="/bookFilter/celebrityPicks/Celebrity Picks"> 
            <button className="sub-nav xxlg" onClick={()=>(this.props.fetchCelebrityPicks())}>Celebrity Picks</button>
            </Link>
          </div>
          <a className="subNav last" href="https://github.com/Lijun-Gan/Amazen">Shop women-owned</a>
            <button ></button>
        </div>

      <div id="book-category">
        

      </div>


      </div>
    )
  };

}


export default NavBar;
