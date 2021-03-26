import React from 'react';
import BookIndexItem from './book_index_item'

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
     
    this.props.fetchBooks()
  }



  render() {
     
    const { books } = this.props;
    if (books.length === 0 ) {
        return (
          <h1>something wrong</h1>
        )
        
    } else {
        return (
            <div className='book-index'>
                <p className='home-top-picks'>Top Picks For You</p>
                <ul className='book-listing'>
                  
                     {books.map((book,idx )=> <BookIndexItem key={idx} book={book} />)}
                  
                    
                </ul>
            </div>
        );
    }
  }
}

  


export default BookIndex;
