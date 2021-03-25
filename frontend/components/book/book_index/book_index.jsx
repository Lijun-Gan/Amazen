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
    debugger
    const { books } = this.props;
    if (books.length === 0 ) {
        return (
          <h1>something wrong</h1>
        )
        
    } else {
        return (
            <div className='book-index'>
                <span className='home-top-picks'>Top Picks For You</span>
                <ul className='book-listing'>
                  
                     {books.map((book,idx )=> <BookIndexItem key={idx} book={book} />)}
                  
                    
                </ul>
            </div>
        );
    }
  }
}

  


export default BookIndex;
