
import { connect } from 'react-redux';
import React from 'react';
import ReviewForm from './review_form';
import {  updateReview } from '../../actions/review_actions';
import {fetchReview} from '../../actions/review_actions'

  
class EditReviewForm extends React.Component {
  constructor(props){
    super(props)
  }

    componentDidMount(){
      // 
      
      this.props.action_mount(this.props.match.params.reviewId)
    }

  render() {

    const { action_submit, formType, review } = this.props;

    // 
    if (!review) return null;
    return (
      <ReviewForm

      action_submit={action_submit}
      formType={formType}
      review={review} 
      history={this.props.history}/>
    );
  }
}


  const mapStateToProps = (state,ownProps) => {
       

      const reviewId = ownProps.match.params.reviewId;

    return {

      // review: state.entities.books[bookId].reviews[reviewId],
      review: state.entities.reviews[reviewId],
      
      formType: "Edit Review",
 
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      action_mount: (reviewId)=>(dispatch(fetchReview(reviewId))),
      action_submit: (review)=>(dispatch(updateReview(review)))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm)
  
  