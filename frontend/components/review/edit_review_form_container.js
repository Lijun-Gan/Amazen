import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchReview, updateReview } from '../../actions/review_actions';

class EditReviewForm extends React.Component {
    constructor(props){
      super(props)
    }
  
      componentDidMount(){
        debugger
        this.props.fetchReview(this.props.review.id)
      }
  
    render() {
  
      const { action,  review } = this.props;
  
      debugger

      if (!review) return null;
      return (
        <ReviewForm
          action={action}
          review={review} />
      );
    }
  }
  
  const mapStateToProps = (state,ownProps) => {
    const reviewId = ownProps.match.params.reviewId;
    debugger
    return {
      review: state.reviews[reviewId],
   
    }
  }
  
  const mapDispatchToProps = (dispatch,ownProps) => {
    return {
      fetchReview: (reviewId)=>(dispatch(fetchReview(reviewId))),
      action: (review)=>(dispatch(updateReview(review)))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm)
  
  