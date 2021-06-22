import React from 'react';
import {Link} from 'react-router-dom';
// import VerifiyPassword from './modal'

class Profile extends React.Component{
    constructor(props){
        super(props);
// start
    this.state = {
        showPopup: false,
        password: '',
        emptyPassword: '',
        invalidPassword: '',
    };

    this.updatePw = this.updatePw.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    }


    componentDidMount() {
        this.props.fetchBooks().then(()=>{

            this.props.fetchProfile(this.props.currentUserId)
        })
        
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup,
            password: '',
            emptyPassword: '',
            invalidPassword: '',
        });
    }
    
    // end 
    
    updatePw(e){
        this.setState({password: e.target.value });
    }

    handleConfirm(e){
        e.preventDefault();
        let invalid_password = "";
        let empty_password = "";

       
        this.props.signin({email_or_phone:this.props.user.email, password: this.state.password}).then(()=>(this.props.history.push('/editLogin')),
        ()=>{
            if(this.state.password === ""){
                empty_password = <h5 className="input-error">❗ Enter your password</h5>
            }else{
                invalid_password = ( 
                    <div className="auth-errors">
                        <div><img src={window.warningBan} alt="passward warning" /></div>
                        <span>
                            <h4>There was a problem</h4>
                            <h5>Your password is incorrect</h5>
                        </span>
                    </div>
                    );
            }
            this.setState({
                invalidPassword: invalid_password ,
                emptyPassword: empty_password,
                password: '',
            });
        });
    }

    handleDate(unformatedDate){

        const d = new Date(unformatedDate)
        const months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December'
        }
        const monthName = months[d.getMonth()]
        const year = d.getFullYear() 
        const date = d.getDate()
        return `${monthName} ${date}, ${year}`
    }

    render(){
        
        if(this.props.user.reviews === undefined || this.props.books === undefined ){
            
            return <h1>Loading....</h1>
        }

        const emptyPasswordColor = (this.state.emptyPassword !== "") ? "input-error" : null;
        const {user, books} = this.props
        return(
            <div id="profile-page">

          
            <div id="profile-container">
                <img id="profile-pic" src={window.profile} alt="profile pic"/>
                <p className="just-grey"></p>
            <div className="profile-header">
                <p className="profile-header-username">{user.username}</p>
           
            {/*start  */}
            <button className='profile-add-to-cart-button' onClick={this.togglePopup.bind(this)}>Edit login & security</button>
            {this.state.showPopup ? 
            (
                <div className='profile-popup'>
                <div className='profile-popup_inner'>
                  {this.state.invalidPassword}
                  <div className="pop-user">

                    <img id="pop-user-pic" src={window.userPic_review} alt="user pic"/>
                    <div>
                        <p className="pop-username">{user.username}</p>
                        <p className="pop-email">{user.email}</p>
                    </div>
                  </div>

                    <div >
        
                        <form  onSubmit={this.handleConfirm} className="pop-form">
                            <p className="pop-password">Password:</p>

                            <input type="password"
                                className={emptyPasswordColor}
                                id="pw"
                                value={this.state.password}
                                onChange={this.updatePw}
                            />

                            {this.state.emptyPassword}
                            <br/>
                            <input className="pop-confirm-btn" type="submit" value="Confirm" />
                            <button onClick={this.togglePopup.bind(this)} className="pop-close-btn">Close</button>
                        </form>
                                
                    </div>
                </div>
              </div>
            )
          : null
        }
            {/* end */}
            
            </div>
            <ul>
                {user.reviews.reverse().map((review,idx)=>(
                    <li key={idx} className="profile-review-list">
              

                        <div id="profile-pictureText">
                            <img id="reviewUser-pic" src={window.userPic_review} alt="user pic"/>

                            <span className="pictureText-text-user">{user.username}</span>
                            <span className="profile-review-date">Reviewed a product • {this.handleDate(review.updated_at)}</span>
                        </div>

                        <div className="profile-rating-star-container">
                            {/* {this.handleRating(review.rating)} */}

<div className="star-ratings-css-reviewbottom">
<div className="star-ratings-css-top" style={{"width":  `${(review.rating/ 5 * 100).toString()+"%"}` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
<div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
</div> 

                        </div>
                            <p className="profile-ictureText-title">{review.title}</p>

                       
                        <p className="profile-reviewBody">{review.body}</p>

                       
                            <div className="profile-book-info" >
                            
                            <Link className="wl-title" to={`/books/${review.book_id}`}>
                            <img className="profile-pic" src={review.imageURL} alt="book img"/>
                            </Link>

                        
                <div className="profile-rating">

              
                            <Link className="profile-title" to={`/books/${review.book_id}`}>
                            {review.book_title}
                            </Link>

<div className="wl-rating-star-container">
    <div className="star-ratings-css-home-page">
        <div className="star-ratings-css-top" style={{"width": `${( books[review.book_id].avg_rating / 5 * 100).toString()+"%"}` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    </div> 
    <p className="review-count-home-page">{books[review.book_id].total_reviews}</p>
 
</div>

                </div>



                            </div>

                       
                    </li>
                ))}
            </ul>
        </div>

        </div>
            
        )
    }

}

export default Profile;