import React from 'react';
import HomeItem from './home_item'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleRecommendation = this.handleRecommendation.bind(this);
    this.handlePrime = this.handlePrime.bind(this);
    this.handleDiscount = this.handleDiscount.bind(this);
    this.handleCelebrityPicks = this.handleCelebrityPicks.bind(this);
    this.handleBestBooks = this.handleBestBooks.bind(this);
    this.handleBookBox = this.handleBookBox.bind(this);
  }

  componentDidMount(){
     
    // if(Object.keys(this.props.books).length === 0){
        
        this.props.fetchBooks()
    // }

    // this.props.fetchBooks()
}

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
     
    const { books, prime } = this.props;
 
    if (books.length === 0 ) {

        return (
          <h1>Loading......</h1>
        )
        
    } else {
        return (
  <div>

<div id="homeCategory">
                <h1 >Books at Amazen</h1>

                <div id="select-category-cantainer">

                <h3>Shop by Category</h3>

                <div id="select-category">

                    <div id="catPic" className="xxsm">
                        <button  onClick={this.handleCategory("Arts & Photography")}>
                            <img id="category_img" src={window.art_book} alt="arts category"/>
                            <span >Arts & Photography</span>
                        </button>
                    </div>

                    <div id="catPic" className="xxsm">
                        <button  onClick={this.handleCategory("Biographies & Memoirs")}>
                            <img id="category_img" src={bio_book} alt="bio category"/>
                            <span>Biographies & Memoirs</span>
                        </button>
                    </div>

                    <div id="catPic" className="xsm">
                        <button onClick={this.handleCategory("Business & Investing")}>
                            <img id="category_img" src={window.bus_book} alt="business category"/>
                            <span>Business & Investing</span>
                        </button>
                    </div>

                    <div id="catPic" className="xsm">
                        <button onClick={this.handleCategory("Children's Books")}>
                            <img id="category_img" src={window.child_book} alt="child_book"/>
                            <span>Children's Book</span>
                        </button>
                    </div>

                    <div id="catPic" className="xsm">
                        <button onClick={this.handleCategory("Cookbooks, Food & Wine")}>
                            <img id="category_img" src={window.cook_book} alt="cookbook category"/>
                            <span>Cookbooks Food & Wine</span>
                        </button>
                    </div>

                    <div id="catPic" className="xsm">
                        <button onClick={this.handleCategory("History")}>
                            <img id="category_img" src={window.history_book} alt="history category"/>
                            <span>History</span>
                        </button>
                    </div>
      
                    {/* <div id="catPic" className="md"> */}
                    <div id="catPic" className="xsm">
                        <button onClick={this.handleCategory("Literature & Fiction")}>
                            <img id="category_img" src={window.fiction_book} alt="literature category"/>
                            <span>Literature & Fiction</span>
                        </button>
                    </div>
                
                    {/* <div id="catPic" className="lg"> */}
                    <div id="catPic" className="xsm">
                        <button onClick={this.handleCategory("Mystery & Suspense")}>
                            <img id="category_img" src={window.mystery_book} alt="mystery category"/>
                            <span>Mystery & Suspense</span>
                        </button>
                    </div>

                    {/* <div id="catPic" className="xlg"> */}
                    <div id="catPic" className="xsm">
                        <button onClick={this.handleCategory("Romance")}>
                            <img id="category_img" src={window.romance_book} alt="romance category"/>
                            <span>Romance</span>
                        </button>
                    </div>
                    {/* <div id="catPic" className="xxlg"> */}
                    <div id="catPic" className="lg">
                        <button onClick={this.handleCategory("Sci-Fi & Fantasy")}>
                            <img id="category_img" src={window.fantacy_book} alt="fantacy category"/>
                            <span>Sci-fi & Fantasy</span>
                        </button>
                    </div>


                    <div id="catPic" className="xlg">
                        <button onClick={this.handleCategory("Teens & Toung Adult")}>
                            <img id="category_img" src={window.teens_book} alt="young adult category"/>
                            <span>Teens & Young Adult</span>
                        </button>
                    </div>


                </div>

                </div>

            </div>
{/*  */}
            <div className='home-book-index'>

                {/* <div className="book-index-left">
                    <p></p>
                </div> */}

                <div className="home-page-left" >


                <section className="book-index-page-section">

                <p className="book-index-page-section-title">Shop by Book Format</p>

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


                <section className="book-index-page-section">

                <p className="book-index-page-section-title">Category</p>

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

                </div>


                    <div>


                <section className="section-min-width">

                    <button className="book-index-container" onClick={this.handleRecommendation}>
                        <img className="bookFilter-img" src={window.summerReading} alt="summer reading" />
                    </button>


                    <div className="home-flex">
                        <button className="home-flex-pic-div" onClick={this.handleBestBooks}>
                            <img className="home-flex-pic" src={window.bestMonth} alt="bestMonth" />
                        </button>

                        <div className="home-flex-pic-div" onClick={this.handleCelebrityPicks}>
                            <img className="home-flex-pic" src={ window.celebrityPicks} alt="celebrityPicks" />
                        </div>

                        <div className="home-flex-pic-div" onClick={this.handleBookBox}>
                            <img className="home-flex-pic" src={window.amazenBook} alt="amazenBook" />
                        </div>

                        <div className="home-flex-pic-div last" onClick={this.handleDiscount}>
                            <img className="home-flex-pic" src={window.bookDeals} alt="bookDeals" />
                        </div>
                    </div>

                </section>

                    {this.props.currentUserId? <p className='home-top-picks'>Top picks for you</p> : <p className='home-top-picks'>Best sellers in books</p> }
                    {/* <p className='home-top-picks'>Top Picks For You</p> */}
                    <ul className='book-listing'>
                    
                        {Object.values(books).map((book,idx )=> <HomeItem key={idx} book={book}  prime={prime} />)}
                    
                        
                    </ul>

                </div>
            </div>

  </div>
        );
    }
  }
}

  


export default Home;
