import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview} from '../../actions/review_actions';
import { fetchBook} from '../../actions/book_actions';
import React from 'react'
  
class CreateReviewForm extends React.Component {
  constructor(props){
    super(props)
  }
    // componentDidMount(){
    //   //debugger
    //   if(!this.props.match.params.bookId){

    //     this.props.action_mount(this.props.match.params.bookId)
    //   }
    // }

  render() {

    const { action_submit, formType, review } = this.props;

    debugger
    if (!this.props.review) return null;
    // if (!review) return null;
    return (
      <ReviewForm
      // action_mount={action_mount}
      action_submit={action_submit}
      formType={formType}
      review={review} 
      history={this.props.history}/>
    );
  }
}

const mapStateToProps = (state,ownProps) => {

    debugger
    const bookId = ownProps.match.params.bookId;
    const book = state.entities.books[bookId];

    return{
        review: {
            title: "",
            body: "",
            rating: 0,
            book_id: bookId,
            user_id: state.session.id,
            bookTitle: book.title,
            bookImgUrl: book.image_url
        },
        formType: "Create Review",
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        action_submit: (review)=>(dispatch(createReview(review))),
        action_mount: (reviewId)=>(dispatch(fetchBook(reviewId)))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateReviewForm)