import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component{
    constructor(props){
        super(props);
      
    }

    componentDidMount() {
        this.props.fetchBooks()
        this.props.fetchProfile(this.props.currentUserId)
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
        
        if(this.props.user.reviews === undefined){
            return <h1>Loading....</h1>
        }

        const {user, books} = this.props
        return(
            <div id="profile-page">

          
            <div id="profile-container">
                <p className="just-grey"></p>
            <div className="profile-header">
                <p className="profile-header-username">{user.username}</p>
                <button className='profile-add-to-cart-button'>Edit your public profile</button>
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