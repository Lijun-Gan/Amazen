import React from 'react';
import NavBar from '../../home_page/navigation';
import Footer from '../../home_page/footnote';


class BookShow extends React.Component {
    constructor(props) {
      super(props);
    }
  
    componentDidMount(){

      this.props.fetchBook(this.props.match.params.id)
    }


    render(){  
        const {book} = this.props
        // let show_page = "page broken"
        let show_page = <img src={ window.page_broken} alt="page broken"/>  
        if (this.props.book){
            show_page = (

            <div id="sp-container">

                <div id="sp-container-first">

                    <div>
                        <img id="showPage-bookImg" src={book.image_url}/>
                    </div>

                    <div className="sp-detail">
                        <p className="sp-title">{book.title}</p>
                        <span>by </span>
                        <span className="sp-author">{book.author} (Author)</span>
                        <img id="fiveStar" src={window.five_star} alt="rating"/>
                        <p className="sp.catogory">{book.category}</p>

                        <p className="diff-price"> See all formats and editions</p>

                        <ul className="sp-prices">
                           { book.prices.map((formatPrice)=> {
                               return (
                               <li key={formatPrice.id}>
                                   <button className="price-btn">{formatPrice.book_format}<br/>{formatPrice.price}</button>
                               </li>
                           )})}
                        </ul>
                        <p>{book.description}</p>
                    </div>

                    <div id="addCartContainer">
                        <p>free shipping</p>
                        <p>sold by amazen</p>
                    </div>

                    <div id="sp-container-secend"></div>

                </div>

            </div>

            

        )}
        return (
            <div>
                <NavBar />
                {show_page}
                <Footer />
            </div>
        )
    } 
}
  


export default BookShow;