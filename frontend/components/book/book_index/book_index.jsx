import React from 'react';
import BookIndexItem from './book_index_item'

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
     
    if(Object.keys(this.props.books).length === 0){

        this.props.fetchBooks()
    }
  }

  handleCategory(category){
    return ()=>{
      this.props.fetchBooksCategory(category)
    }
  }


  render() {
     
    const { books } = this.props;
 
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
                        <button  onClick={this.handleCategory("arts & photography")}>
                            <img id="category_img" src={window.art_book} alt="arts category"/>
                            <span >Arts & Photography</span>
                        </button>
                    </div>

                    <div id="catPic" className="xxsm">
                        <button  onClick={this.handleCategory("biographies & memoirs")}>
                            <img id="category_img" src={bio_book} alt="bio category"/>
                            <span>Biographies & Memoirs</span>
                        </button>
                    </div>

                    <div id="catPic" className="xsm">
                        <button onClick={this.handleCategory("business & investing")}>
                            <img id="category_img" src={window.bus_book} alt="business category"/>
                            <span>Business & Investing</span>
                        </button>
                    </div>

                    <div id="catPic" className="xsm">
                        <button onClick={this.handleCategory("children's books")}>
                            <img id="category_img" src={window.child_book} alt="child_book"/>
                            <span>Children's Book</span>
                        </button>
                    </div>

                    <div id="catPic" className="md">
                        <button onClick={this.handleCategory("cookbooks,food & wine")}>
                            <img id="category_img" src={window.cook_book} alt="cookbook category"/>
                            <span>Cookbooks Food & Wine</span>
                        </button>
                    </div>

                    <div id="catPic" className="md">
                        <button onClick={this.handleCategory("history")}>
                            <img id="category_img" src={window.history_book} alt="history category"/>
                            <span>History</span>
                        </button>
                    </div>
      
                    <div id="catPic" className="md">
                        <button onClick={this.handleCategory("literature & fiction")}>
                            <img id="category_img" src={window.fiction_book} alt="literature category"/>
                            <span>Literature & Fiction</span>
                        </button>
                    </div>
                
                    <div id="catPic" className="lg">
                        <button onClick={this.handleCategory("mystery & suspense")}>
                            <img id="category_img" src={window.mystery_book} alt="mystery category"/>
                            <span>Mystery & Suspense</span>
                        </button>
                    </div>

                    <div id="catPic" className="xlg">
                        <button onClick={this.handleCategory("romance")}>
                            <img id="category_img" src={window.romance_book} alt="romance category"/>
                            <span>Romance</span>
                        </button>
                    </div>

                    <div id="catPic" className="xxlg">
                        <button onClick={this.handleCategory("sci-fi & fantasy")}>
                            <img id="category_img" src={window.fantacy_book} alt="fantacy category"/>
                            <span>Sci-fi & Fantasy</span>
                        </button>
                    </div>


                    <div id="catPic" className="xxlg">
                        <button onClick={this.handleCategory("teens & young adult")}>
                            <img id="category_img" src={window.teens_book} alt="young adult category"/>
                            <span>Teens & Young Adult</span>
                        </button>
                    </div>


                </div>

                </div>

            </div>
{/*  */}

            <div className='book-index'>
                <p className='home-top-picks'>Top Picks For You</p>
                <ul className='book-listing'>
                  
                     {Object.values(books).map((book,idx )=> <BookIndexItem key={idx} book={book} />)}
                  
                    
                </ul>
            </div>

  </div>
        );
    }
  }
}

  


export default BookIndex;
