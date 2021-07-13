import React from 'react';
import BookIndexItem from '../book/book_index/book_index_item'

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
        // if(Object.values(this.props.books).length ===0){

            this.props.fetchBooks()
        // }
  }


  render() {
      
      if (this.props.books === undefined  ) {
              
        return (
            <h1>Loading......</h1>
            )
            
        } else {

            const { books,total,search, prime } = this.props;
        // if(total === 0){
        //     this.props.fetchBooks()
        // }
        
                    
        // const total = Object.values( books).length
        
        
        let start = "1";
        
        if(total > 1){
            start = "1-" + total.toString()
        }
        
        if(total > 1){
            start = "0" 
        }
        
        let book_count = [];
        let result = books.filter((book)=>{
            if (search === ""){
                book_count.push(book)
                return book
            } else if (book.title.toLowerCase().includes(search.toLowerCase())){
                book_count.push(book)
                return book
            }
        })

        if(result.length === 0){
            result = books
        }
        

        // 1-25 of over 1,000 results for "How to Win Friends & Influence People"
        return (

  <div>
            <div className='book-index'>
                {/* <p className='home-top-picks'>Top Picks For You</p> */}

                <div className="search-result">

                    <span className="result-number">{Math.min(1,book_count.length)} - {book_count.length} results for </span>
                    <span className="result-letter"> "{search}"</span>
                </div>

                <p className="just-line"></p>

                <ul className='book-listing'>
                  
                     {result.map((book,idx )=> <BookIndexItem key={idx} book={book} prime={prime}/>)}
                    
                </ul>
            </div>

  </div>
        );
    }
  }
}

  


export default  SearchResult ;
