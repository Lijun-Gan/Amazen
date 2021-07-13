import React from 'react';
import {Link} from 'react-router-dom';


class UserReviewItem extends React.Component{
    constructor(props){
        super(props);
// start
    this.state = {

        showReviewBtn: false,
        showReviewBtnId: '',

    };



    this.handleBtn = this.handleBtn.bind(this)
    this.hanleDeleteReview = this.hanleDeleteReview.bind(this)

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    }


    componentDidMount() {

        document.addEventListener('mousedown', this.handleClickOutside);
      
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }


    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            // alert('You clicked outside of me!');
          
            if(this.state.showReviewBtn){
            

                // const id = this.wrapperRef.current.id.slice(0,-1)
                let popup = document.getElementById(this.state.showReviewBtnId);
                popup.classList.toggle("show");
         
    
                this.setState({showReviewBtn: !this.state.showReviewBtn,
                    showReviewBtnId: '',
                
                });

            }
        }
    }

    handleBtn(id){

        return(e)=>{

//             if(!this.state.showReviewBtn){

                let popup = document.getElementById(id);
                popup.classList.toggle("show");
         

                this.setState({showReviewBtn: !this.state.showReviewBtn,
                    // showReviewBtnId: id
                    showReviewBtnId: this.state.showReviewBtnId ? '' : id
                
                });
//             }else{
//                     let popup = document.getElementById(this.state.showReviewBtnId);
//                     popup.classList.toggle("show");
        
//                     this.setState({showReviewBtn: !this.state.showReviewBtn,
//                         showReviewBtnId: '',
//                     });

               

//             }


        }
    }

    hanleDeleteReview(review){
        return(e)=>{
          
            e.preventDefault()
            this.props.deleteReview(review).then(()=>{
                
                this.props.fetchProfile(this.props.currentUserId)
                }
            )
        }
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

        const {review, user } = this.props
        return(
            
            <li className="profile-review-list">
              

                        <div id="profile-pictureText">
                            <img id="reviewUser-pic" src={window.userPic_review} alt="user pic"/>

                            <span className="pictureText-text-user">{user.username}</span>
                            <span className="profile-review-date">Reviewed a product • {this.handleDate(review.updated_at)}</span>


                            {/* <button className="threeDots-btn"> */}
                            {/* ref={this.wrapperRef}  */}
                            <div ref={this.wrapperRef}  id={review.id + "&"}  className="tooltip" onClick={this.handleBtn(review.id)}>
                                <img src={window.threeDots} alt="hide delete" className="threeDots-pic"/>

                                {/* <div className="tooltiptext" style={{visibility: this.state.showReviewBtn? 'visible' : 'hidden' }}> */}
                                <div className="tooltiptext" id={review.id}>
                                        <Link to={`/reviews/${review.id}/edit`} >
                                            <p className="profile-editReview-btn">Edit review</p>
                                            {/* Edit review */}
                                        </Link>
                                            <button className="profile-deleteReview-btn" onClick={this.hanleDeleteReview(review)} >Detete review</button>

                                </div>
                            </div>

                        </div>




                        <div className="profile-rating-star-container">
                            {/* {this.handleRating(review.rating)} */}

                            <div className="star-ratings-css-reviewbottom">
                                <div className="star-ratings-css-top" style={{"width":  `${(review.rating/ 5 * 100).toString()+"%"}` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                            </div> 

                            {review.purchased ? <p className="verified-purchase">Verified Purchase</p> : null}

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
                        <div className="star-ratings-css-top" style={{"width": `${( review.avg_rating / 5 * 100).toString()+"%"}` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                        {/* <div className="star-ratings-css-top" style={{"width": `${( books[review.book_id].avg_rating / 5 * 100).toString()+"%"}` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div> */}
                        <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    </div> 
                    <p className="review-count-home-page">{review.total_reviews}</p>
                
                </div>

                </div>



                            </div>

                       
                    </li>

        )
    }
}

export default UserReviewItem;