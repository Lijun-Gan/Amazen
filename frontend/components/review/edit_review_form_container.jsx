
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import ReviewForm from './review_form';
import {  updateReview } from '../../actions/review_actions';
import {fetchReview} from '../../actions/review_actions'

  
class EditReviewForm extends React.Component {
  constructor(props){
    super(props)
  }

    componentDidMount(){
      debugger
      // where this this get to returned ?
      this.props.action_mount(this.props.match.params.reviewId)
    }

  render() {
    // DO NOT MODIFY THIS FUNCTION

    const { action_mount,action_submit, formType, review } = this.props;

    debugger

    // Hint: The post will not exist on the first render - what do we need to do
    // to get it?
    if (!review) return null;
    return (
      <ReviewForm
      action_mount={action_mount}
      action_submit={action_submit}
      formType={formType}
      review={review} 
      history={this.props.history}/>
    );
  }
}


  const mapStateToProps = (state,ownProps) => {
      debugger

    //   let e_title = "";
    //   let e_img_url = "";
    //   let e_book_title="";
    //   let e_rating ="";
    //   let e_body ="";
    //   let e_book_id="";

      const reviewId = ownProps.match.params.reviewId;
      // let reviewCom = state.entities.reviews[reviewId]

    //   if(reviewCom){
    //     e_title = reviewCom.title;
    //     e_img_url = reviewCom.bookImgUrl;
    //     e_book_title = reviewCom.bookTitle;
    //     e_rating =reviewCom.rating;
    //     e_body =state.session.id;
    //     e_book_id=reviewCom.book_id;
    //   }
    debugger
    return {
        // review : reviewCom,
    //   review: {
    //     title: e_title ,
    //     body: e_body,
    //     rating:  e_rating,
    //     user_id: state.session.id,
    //     book_id: e_book_id
    //   },
      review: state.entities.reviews[reviewId],
      formType: "Edit Review",
    //   bookTitle: reviewCom.bookTitle,
    //   bookImgUrl: reviewCom.bookImgUrl, 
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      action_mount: (reviewId)=>(dispatch(fetchReview(reviewId))),
      action_submit: (review)=>(dispatch(updateReview(review)))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm)
  
  