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
    this.dropdownItem = this.dropdownItem.bind(this);
    }

    componenetDidMount(){
        debugger
        this.props.fetchBooks()
        this.handleInput()
        // this.getInput()
    }

    handleInput(e){
        e.preventDefault()
        let search = e.target.value 
        this.props.receiveSearch(search)
        this.setState(state=>({
            input: search
        }))
    }


   dropdownItem(e,id){
       debugger
    this.setState({
        input: '',
    
     })
     this.props.history.push(`/books/${id}`)
}


    searchedBook(e, id){
        this.setState({
            input: '',
            previousInput: ''
         })
         this.props.history.push(`/books/${id}`)
    }

    render(){

        let searchBookTitle = "";
        if (this.props.books && this.props.search && this.state.input) {
            searchBookTitle  =  this.props.books.filter((option) => {         
                if (option.title.toLowerCase().includes(this.state.input.toLowerCase())){
                    return option
                }
            })
           
            .map((book,idx) => (
                
                <Link key={book.id} to={`/books/${book.id}`}>
                    <p className="search-book-link" key={book.id} >{book.title}</p> 
                </Link>

                // <Link key={book.id} to={`/books/${book.id}`}>{book.title}</Link>
              
                
                // <Link key={book.id} to={`/books/${book.id}`}>{book.title}</Link>

                // <button key={book.id} onClick={() => {alert('TEST');}} value={book.id}>{book.title}</button>
                // <button key={book.id} onClick={this.dropdownItem} value={book.id}>{book.title}</button>

                    // <button className="search-book-link" key={book.id} onClick={ ()=> this.props.history.push(`/books/${id}`)} >{book.title}</button> 
                    // <button key={book.id} onClick={e => this.dropdownItem(e, book.id)}>{book.title}</button>
                
              ))
          }    
        //   
        //   onClick={e => this.searchedBook(e, book.id)}
       
        return (
            <div className="searchbar">
                    {/* <form className="nav-search-bar-container"> */}
                    <button id="search-all">All &nbsp;▾</button>
                    <div className="nav-search-bar-with-icon">
                        <input id="nav-search-bar" type="text"  onChange={this.handleInput} autoComplete="off"/>
                        <div className="search-dropdown">
                            {searchBookTitle }
                        </div>
                        <button className="search-icon-btn"><img className="search-icon" src={window.search_icon} alt="Search" /></button>

                    </div>
                    {/* </form>   */}

            </div>
        )
    }
}

export default withRouter(SearchBar);
