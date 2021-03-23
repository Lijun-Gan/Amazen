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

  // render() {
   
  //   debugger
  //   if (Boolean(this.props.books) === false) {
  //         return <h1>Loading...</h1>;}

  //   return (
  //     <div>
  //       <ul>
  //         {/* {this.props.books.values.map((book)=>{
     
  //           <li key={book.id}>
  //             <img src={book.image_url} alt=""/>
  //             <p>{book.title}</p>
  //             <p>{book.rating}</p>
  //             <p>{book.price}</p>
  //           </li>
  // })} */}
  //       </ul>
  //     </div>
  //   )

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
                  
                     {books.map((book,idx )=> <BookIndexItem key={idx} book={book}/>)}
                  
                    
                </ul>
            </div>
        );
    }
  }
}

  


export default BookIndex;
