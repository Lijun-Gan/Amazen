// import { Dropdown } from 'bootstrap';
// import { Dropdown } from 'bootstrap';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            input: ''
        };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    componenetDidMount(){
    
        this.props.fetchBooks()
        this.handleInput()
    }

    handleInput(e){
        e.preventDefault()
        let search = e.target.value 
        this.props.receiveSearch(search)
        this.setState(state=>({
            input: search
        }))
    }


    handleSubmit(e){
        e.preventDefault()
         debugger
         this.props.fetchBooksTitle(this.state.input)
         this.props.history.push("/search")
    }

    // searchedBook(e, id){
    //     this.setState({
    //         input: '',
    //         previousInput: ''
    //      })
    //      this.props.history.push(`/books/${id}`)
    // }

    render(){

        let searchBookTitle = "";
        if (this.props.books && this.props.search && this.state.input) {
            searchBookTitle  =  this.props.books.filter((option) => {         
                if (option.title.toLowerCase().includes(this.state.input.toLowerCase())){
                    return option
                }
            }).map((book,idx) => (
                <button className="search-book-link" key={book.id} onClick={this.handleSubmit} >{book.title}</button> 
                // <button className="search-book-link" key={book.id} onClick={ ()=> this.props.history.push(`/books/${id}`)} >{book.title}</button> 
                
                // <Link key={book.id} to={`/books/${book.id}`}>
                //     <p className="search-book-link" key={book.id} >{book.title}</p> 
                // </Link>

                // <button key={book.id} onClick={() => {alert('TEST');}} value={book.id}>{book.title}</button>        
                
              ))
          }    
        

       
        return (
            <div className="searchbar">
                    <button id="search-all">All &nbsp;▾</button>
                    <form className="nav-search-bar-with-icon" onSubmit={this.handleSubmit}>
                    {/* <form className="nav-search-bar-container"> */}
                    {/* <div className="nav-search-bar-with-icon"> */}
                        <input id="nav-search-bar" type="text"  onChange={this.handleInput} autoComplete="off"/>
                        <div className="search-dropdown">
                            {searchBookTitle }
                        </div>
                        <button className="search-icon-btn" ><img className="search-icon" src={window.search_icon} alt="Search" /></button>

                    {/* </div> */}
                    </form>  

            </div>
        )
    }
}

export default withRouter(SearchBar);
