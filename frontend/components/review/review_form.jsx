import React from 'react';
import {Redirect} from 'react-router-dom'

class ReviewForm extends React.Component{
    constructor(props){
        debugger
        super(props)
        debugger
        this.state = this.props.review
       debugger
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
    //     debugger
        if(this.props.formType === "Create Review" ){
            debugger
            this.props.action_mount(this.props.match.params.bookId)

        }
    //             ()=>{
    //                 debugger
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
    
    
    }

    handleSubmit(e){
        e.preventDefault();
        debugger
        this.props.action_submit(this.state).then(this.props.history.push(`/books/${this.state.book_id}`));
    }
    

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value});
        };
    }

    render(){
        // debugger
        // if (!(this.props.review)) {
        //     return <h1>Loading...</h1>;
        // }
        // if (Boolean(this.props.review) === false) {
        //     return <h1>Loading...</h1>;
        // }
        debugger
        return( 
            <div className='postForm-container'>
                <h3>{this.props.formType}</h3>
               
                <div id="PictureText">
                    <img id="revieForm-bookPic" src={this.state.bookImgUrl} alt="book image"/>
                    <span className="PictureText-text">{this.state.bookTitle}</span>
                </div>

                <form onSubmit={this.handleSubmit}>

                    <label > Overall rating:</label>
                        <input type="text" 
                        className="review-form-rating-input"
                        value={this.state.rating}
                        onChange={this.handleInput('rating')}
                        />
                    <br/>
                    
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