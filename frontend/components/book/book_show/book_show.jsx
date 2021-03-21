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

                    <div id="sp-detail">
                        <p className="sp.title">{book.title}</p>
                        <p className="sp.author">by {book.author} (Author)</p>
                        <img id="fiveStar" src={window.five_star} alt="rating"/>
                        <p className="sp.catogory">{book.category}</p>

                        <ul id="sp-prices">
                           { book.prices.map((formatPrice,idx)=> {
                               return (
                               <li key={idx}>
                                   <p>{formatPrice.book_format}</p>
                                   <p>{formatPrice.price}</p>
                               </li>
                           )})}
                        </ul>
                        <p>{book.description}</p>
                    </div>

                    <div id="addCartContainer">
                        tbd
                    </div>

                    <div id="sp-container-sed"></div>

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