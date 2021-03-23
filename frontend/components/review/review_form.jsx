import React from 'react';
import {Redirect} from 'react-router-dom'

class ReviewForm extends React.Component{
    constructor(props){
        //debugger
        super(props)
        debugger
        this.state = this.props.review
    //    debugger
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRating = this.handleRating.bind(this);
    }

    // componentDidMount(){
    // //     //debugger
    //     if(this.props.formType === "Create Review" ){
    //         //debugger
    //         this.props.action_mount(this.props.match.params.bookId)

    //     }


    //             ()=>{
    //                 //debugger
    //                 this.setState({
    //                     review: {
    //                         title: "" ,
    //                         body: "",
    //                         rating:  "",
    //                         user_id: state.session.id,
    //                         book_id: book_id,
    //                         bookTitle: "",
    //                         bookImgUrl: "" }
    //                 })
      
    //             })
    
    
    // }

    handleSubmit(e){
        e.preventDefault();
        //debugger
        this.props.action_submit(this.state).then(()=>(this.props.history.push(`/books/${this.state.book_id}`)));
    }
    

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value});
        };
    }

    handleRating(e){

        debugger
        
        let newRating

        newRating = parseInt(e.target.value)
       
        this.setState({rating: newRating})
    }

    render(){
        // //debugger
        // if (!(this.props.review)) {
        //     return <h1>Loading...</h1>;
        // }
        // if (Boolean(this.props.review) === false) {
        //     return <h1>Loading...</h1>;
        // }
        //debugger
        // this.state.rating = this.props.review.rating
        return( 

            <div className='postForm-container'>
                <h3>{this.props.formType}</h3>
                 <p> state: {this.state.rating}</p>
                 <p> prop: { this.props.review.rating}</p>

                <div id="PictureText">
                    <img id="revieForm-bookPic" src={this.state.bookImgUrl} alt="book image"/>
                    <span className="PictureText-text">{this.state.bookTitle}</span>
                </div>

                <form onSubmit={this.handleSubmit}>

                    {/* <label > Overall rating:</label>
                        <input type="text" 
                        className="review-form-rating-input"
                        value={this.state.rating}
                        onChange={this.handleInput('rating')}
                        /> */}
                    <br/>

                  


<div className="rating-star">
    <input type="radio" id="star5" name="rate" value="5" defaultChecked={this.state.rating === 5} onClick={this.handleRating}/>
    <label htmlFor="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" defaultChecked={this.state.rating=== 4} onClick={this.handleRating}/>
    <label htmlFor="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" defaultChecked={this.state.rating === 3} onClick={this.handleRating}/>
    <label htmlFor="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" defaultChecked={this.state.rating === 2} onClick={this.handleRating}/>
    <label htmlFor="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" defaultChecked={this.state.rating === 1} onClick={this.handleRating}/>
    <label htmlFor="star1" title="text">1 star</label>
  </div>
                                        
                    <label>Add a headline:</label>
                        <input type="text" 
                        className="review-form-title-input"
                        value={this.state.title}
                        onChange={this.handleInput('title')}
                        />
                    
                    <br/>

                    <label>Add a written review:</label>
                    <textarea onChange={this.handleInput('body')}
                    className="review-form-body-input" 
                    value={this.state.body}>
                   </textarea>
                    <br/>

                    <button>submit</button>
                </form>

            </div>
        )
    }
}

export default ReviewForm;