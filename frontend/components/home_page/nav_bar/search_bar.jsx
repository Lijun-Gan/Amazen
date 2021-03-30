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
            previousInput: state.input,
            input: search
        }))
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
            debugger

            searchBookTitle  =  this.props.books.filter((option) => {
                debugger
                
                if (option.title.toLowerCase().includes(this.state.input.toLowerCase())){
                    debugger
                    return option
                }
            })
            .map((book) => (
                <Link key={book.id} to="/">
                    <p className="search-book-link" key={book.id} onClick={e => this.searchedBook(e, book.id)}>{book.title}</p>
                </Link>
                
              ))
          }    
          

       
        return (
            <div className="searchbar">
                    <form className="nav-search-bar-container">
                    <button id="search-all">All &nbsp;▾</button>
                    <div className="nav-search-bar-with-icon">
                        <input className="nav-search-bar" type="text"  onChange={this.handleInput}/>
                        <button className="search-icon-btn"><img className="search-icon" src={window.search_icon} alt="Search" /></button>
                        <div className="search-dropdown">
                            {searchBookTitle }
                        </div>

                    </div>
                    </form>  

            </div>
        )
    }
}

export default withRouter(SearchBar);
