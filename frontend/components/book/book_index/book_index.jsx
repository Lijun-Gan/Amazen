import React from 'react';
import BookIndexItem from './book_index_item'

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    debugger
    this.props.fetchBooks()
  }



  render() {
    const { books } = this.props;
    if (books.length === 0) {
        return (
            <div className='no-match'>
                <span className='no-match-message'>
                    Your search did not match any products.
                </span>
                <span className='try-searching'>
                    Try checking your spelling or use more general terms.
                </span>
            </div>
        )
        
    } else {
        return (
            <div className='book-index'>
                <span className='all-books-head'>Products</span>
                <ul className='book-listing'>
                  
                     {books.map((book,idx )=> <BookIndexItem key={idx} book={book} reviews/>)}
                  
                    
                </ul>
            </div>
        );
    }
  }
}

  


export default BookIndex;
