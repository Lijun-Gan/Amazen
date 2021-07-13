import React from 'react';
// import {Link} from 'react-router-dom';
import UserReviewItem from './user_review_item';
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
        showReviewBtn: false,
        showReviewBtnId: '',

    };


    this.updatePw = this.updatePw.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)

    // this.handleBtn = this.handleBtn.bind(this)
    // this.hanleDeleteReview = this.hanleDeleteReview.bind(this)
    // this.wrapperRef = React.createRef();
    // this.handleClickOutside = this.handleClickOutside.bind(this);
    }


    componentDidMount() {

        // document.addEventListener('mousedown', this.handleClickOutside);
  
        // this.props.fetchBooks().then(()=>{

            this.props.fetchProfile(this.props.currentUserId)
        // })      
    }


    // componentWillUnmount() {
    //     document.removeEventListener('mousedown', this.handleClickOutside);
    // }

    // handleClickOutside(event) {
    //     if (this.wrapperRef && this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
    //         // alert('You clicked outside of me!');
    
    //         if(this.state.showReviewBtn){
    //             // const id = this.wrapperRef.current.id.slice(0,-1)
    //             let popup = document.getElementById(this.state.showReviewBtnId);
    //             popup.classList.toggle("show");
         
    //             this.setState({showReviewBtn: !this.state.showReviewBtn,
    //                 showReviewBtnId: '',});
    //         }}}

    // handleBtn(id){

    //     return(e)=>{
    //         if(!this.state.showReviewBtn){
    //             let popup = document.getElementById(id);
    //             popup.classList.toggle("show");
        
    //             this.setState({showReviewBtn: !this.state.showReviewBtn,
    //                 showReviewBtnId: id});
    //         }else{
    //                 let popup = document.getElementById(this.state.showReviewBtnId);
    //                 popup.classList.toggle("show");
    //                 this.setState({showReviewBtn: !this.state.showReviewBtn,
    //                     showReviewBtnId: '', });

    //                  this.handleBtn(id)
    //         }}}



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

       
        this.props.signin({email_or_phone:this.props.user.email, password: this.state.password})
        .then(()=>(this.props.history.push('/editLogin')),
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

//    hanleDeleteReview(review){
//         return(e)=>{
          
//             e.preventDefault()
//             this.props.deleteReview(review).then(()=> this.props.fetchProfile(this.props.currentUserId))
//         }
//    }

//     handleDate(unformatedDate){

//         const d = new Date(unformatedDate)
//         const months = {
//             0: 'January',
//             1: 'February',
//             2: 'March',
//             3: 'April',
//             4: 'May',
//             5: 'June',
//             6: 'July',
//             7: 'August',
//             8: 'September',
//             9: 'October',
//             10: 'November',
//             11: 'December'
//         }
//         const monthName = months[d.getMonth()]
//         const year = d.getFullYear() 
//         const date = d.getDate()
//         return `${monthName} ${date}, ${year}`
//     }

    render(){
        
        if(this.props.user.reviews === undefined  ){
            
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
                <div className="profile-disply-flex">
                    <p className="user-review-title">Community activity</p>
                    <p className="review-down-arrow">View: Reviews <span className="arrow-bold">⌵</span></p>
                </div>
                {user.reviews.slice().reverse().map((review,idx)=>(
                    <UserReviewItem key={idx} review={review} user={user} deleteReview={this.props.deleteReview} fetchProfile={this.props.fetchProfile} currentUserId={this.props.currentUserId}/>
                ))}

                <div className="profile-padding">

                    <h2 className="crossline"><span id="profile-end-list">End of list</span></h2> 
                </div>
            </ul>
        </div>

        </div>
            
        )
    }

}

export default Profile;