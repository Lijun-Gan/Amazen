import React from 'react';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);



    this.handleRecommendation = this.handleRecommendation.bind(this);
    this.handlePrime = this.handlePrime.bind(this);
    this.handleDiscount = this.handleDiscount.bind(this);
    this.handleCelebrityPicks = this.handleCelebrityPicks.bind(this);
    this.handleBestBooks = this.handleBestBooks.bind(this);
    this.handleBookBox = this.handleBookBox.bind(this);
    // this.handleCheck = this.handleCheck.bind(this);
  }



  componentDidMount(){


    if(Object.keys(this.props.books).length === 0){

      this.handleFetch()
      console.log("from first if")

    //     this.props.fetchBooks()
    }


    // if (this.props.history.action === "POP") {

   
    //   console.log(this.props.match.params, this.props.match.params.kinds)
    //   this.handleFetch()

    //   console.log("from second if")
    // }

    // window.addEventListener('popstate', 
    //   this.handleCheck
    //   // alert("You message");
    // );


  }

  componentDidUpdate(prevProps) {
    // will be true
   
      if(this.props.location !== prevProps.location){
   
          if (this.props.history.action === "POP") {
            this.handleFetch()
            // console.log(this.props.match.params, this.props.match.params.kinds,"checking params")
          }
      }
    
  }

  // handleCheck(){
  //   console.log(this.props.match.params, "form listener")
  //   if (location.action === "POP") {
  //     console.log(this.props.match.params, this.props.match.params.kinds,"checking params")
  //   }
  // }


  //   componentWillUnmount(){
  // //     // this.props.clearBookState()
  // // // .then(()=>{
  // // //     this.props.fetchBooks()
  // // //   // })

  // //     this.backListener(); 
  //   window.removeEventListener('popstate', this.handleCheck)
  // }



  handleFetch(){
      if(this.props.match.params.kinds === "category"){
    
        this.props.fetchBooksCategory(this.props.match.params.kind)
      }

      if(this.props.match.params.kinds === "format"){

          this.props.fetchBooksFormat(this.props.match.params.kind)
      }

      if(this.props.match.params.kinds === "recommendations"){

          this.props.fetchBooksRecommendation()
      }

      if(this.props.match.params.kinds === "primes"){

          this.props.fetchBooksPrime()
      }

      if(this.props.match.params.kinds === "discounts"){
          this.props.fetchBooksDiscount()
      }
   
      if(this.props.match.params.kinds === "bestBooks"){
          this.props.fetchBestBooks()
      }
      if(this.props.match.params.kinds === "celebrityPicks"){
          this.props.fetchCelebrityPicks()
      }
      if(this.props.match.params.kinds === "bookBoxs"){
          this.props.fetchBookBox()
      }
  }


  handleCategory(category){
    return (e)=>{
        e.preventDefault();
        this.props.fetchBooksCategory(category).then(()=>{
        // this.props.history.push('/books')
        this.props.history.push(`/bookFilter/category/${category}`)
        })
    }
  }

  handleFormat(format){
    return (e)=>{
        e.preventDefault();
        this.props.fetchBooksFormat(format).then(()=>{
        // this.props.history.push('/books')
        this.props.history.push(`/bookFilter/format/${format}`)
        })
    }
  }
  handleRecommendation(){
    this.props.fetchBooksRecommendation().then(()=>{
      // this.props.history.push('/books')
      this.props.history.push("/bookFilter/recommendations/Recommendation")
    })
  }

  handlePrime(){
    this.props.fetchBooksPrime().then(()=>{
      // this.props.history.push('/books')
      this.props.history.push("/bookFilter/primes/Prime")
    })
  }

  handleDiscount(){
    this.props.fetchBooksDiscount().then(()=>{
      // this.props.history.push('/books')
      this.props.history.push("/bookFilter/discounts/Discount")
    })
  }


  handleBestBooks(){
    this.props.fetchBestBooks().then(()=>{
      // this.props.history.push('/books')
      this.props.history.push("/bookFilter/bestBooks/Best Books of the Month")
    })
  }

  
 
  handleCelebrityPicks(){
    this.props.fetchCelebrityPicks().then(()=>{
      // this.props.history.push('/books')
      this.props.history.push("/bookFilter/celebrityPicks/Celebrity Picks")
    })
  }

  handleBookBox(){
    this.props.fetchBookBox().then(()=>{
      // this.props.history.push('/books')
      this.props.history.push("/bookFilter/bookBoxs/Book Box")
    })
  }

 

  render(){
     
    const { books, prime, currentUserId } = this.props;

    if (books.length === 0 ) {

        return (
          <h1>Loading......</h1>
        )
        
    } else {
        return (
  <div className="book-index-page">

      <div className="book-index-page-left">

        <section className="book-index-page-section">

          <p className="book-index-page-section-title">Shop by Category</p>

          <div className="book-index-left-item-container">

              <button  onClick={this.handleCategory("Arts & Photography")}>
                <span >Arts & Photography</span>
              </button>

              <button  onClick={this.handleCategory("Biographies & Memoirs")}>
                <span>Biographies & Memoirs</span>
              </button>

              <button onClick={this.handleCategory("Business & Investing")}>
                  <span>Business & Investing</span>
              </button>

              <button onClick={this.handleCategory("Children's Books")}>
                  <span>Children's Book</span>
              </button>

              <button onClick={this.handleCategory("Cookbooks, Food & Wine")}>
                  <span>Cookbooks Food & Wine</span>
              </button>

              <button onClick={this.handleCategory("History")}>
                  <span>History</span>
              </button>

              <button onClick={this.handleCategory("Literature & Fiction")}>
                  <span>Literature & Fiction</span>
              </button>

              <button onClick={this.handleCategory("Mystery & Suspense")}>
                  <span>Mystery & Suspense</span>
              </button>

              <button onClick={this.handleCategory("Romance")}>
                  <span>Romance</span>
              </button>

              <button onClick={this.handleCategory("Sci-Fi & Fantasy")}>
                  <span>Sci-fi & Fantasy</span>
              </button>

              <button onClick={this.handleCategory("Teens & Toung Adult")}>
                  <span>Teens & Young Adult</span>
              </button>

          </div>

         </section>


        <section className="book-index-page-section">

        <p className="book-index-page-section-title">Format</p>

        <div className="book-index-left-item-container">

            <button  onClick={this.handleFormat("Kindle")}>
              <span >Kindle</span>
            </button>

            <button  onClick={this.handleFormat("Audiobook")}>
              <span>Audiobook</span>
            </button>

            <button onClick={this.handleFormat("Paperback")}>
                <span>Paperback</span>
            </button>

            <button onClick={this.handleFormat("Audio CD")}>
                <span>Audio CD</span>
            </button>

            <button onClick={this.handleFormat("Hardcopy")}>
                <span>Hardcopy</span>
            </button>

        </div>

        </section>

        <section className="book-index-page-section">
          <p className="book-index-page-section-title">Recommendations</p>
          
          <div className="book-index-left-item-container">
            <button  onClick={this.handleRecommendation}>
              <span>Recommended Books</span>
            </button>
          </div>

        </section>

        <section className="book-index-page-section">
          <p className="book-index-page-section-title">Amazen Prime</p>
          
        <button className="book-index-price-prime" onClick={this.handlePrime} >
              <span className="book-index-left-check-color">✓</span> 
              <span className="book-index-left-prime-color">prime</span>
        </button>
            

        </section>


        <section className="book-index-page-section">

          <p className="book-index-page-section-title">Deals</p>
          
          <div className="book-index-left-item-container">
            <button onClick={this.handleDiscount}>
              <span>Today's deal</span>
            </button>
          </div>

        </section>

        <section className="book-index-page-section">

          <p className="book-index-page-section-title">Collections</p>
          
          <div className="book-index-left-item-container">
            <button onClick={this.handleBestBooks}>
              <span>Best Books of the Month</span>
            </button>
          </div>

          <div className="book-index-left-item-container">
            <button onClick={this.handleCelebrityPicks}>
              <span>Celebrity Picks</span>
            </button>
          </div>

          <div className="book-index-left-item-container">
            <button onClick={this.handleBookBox}>
              <span>Book Box</span>
            </button>
          </div>

        </section>

        
            

      </div>

      <div>

            <div className="book-index-right">
                <h1 className="book-index-title">{this.props.match.params.kind}</h1>

                <button className="book-index-container" onClick={this.handleRecommendation}>
                    <img className="bookFilter-img" src={window.bookFilter} alt="book filter" />
                </button>

            </div>
{/*  */}
            <div className='book-index'>

                <p className='home-top-picks'>Best Seller</p>
 
                <ul className='home-book-listing'>
                  
                     {Object.values(books).map((book,idx )=> <BookIndexItem key={idx} book={book} prime={prime} currentUserId={currentUserId}/>)}
                  
                    
                </ul>
            </div>

        </div>

  </div>
        );
    }
  }
}

  


export default BookIndex;
