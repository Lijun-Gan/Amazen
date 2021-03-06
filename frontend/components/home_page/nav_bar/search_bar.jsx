import React from 'react';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: ''
        };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    }

    componenetDidMount(){
    
        // this.props.fetchBooks()
        this.handleInput()
    }

    handleInput(e){
        e.preventDefault()
        let search = e.target.value 
        this.props.receiveSearch(search)
        this.setState({ input: search })
    }


    handleSubmit(e){
        e.preventDefault()
   
        //  this.props.fetchBooksTitle(this.state.input)
         this.props.history.push("/search")
    }

    handleDropdown(title){
        return (e)=>{
            e.preventDefault()
            this.props.history.push("/search")
            this.props.receiveSearch(title)
        }
    }




    render(){

        let searchBookTitle = "";
        if (this.props.books && this.props.search && this.state.input) {
            searchBookTitle  =  
            (
                this.props.books.filter((option) => {         
                    if (option.title.toUpperCase().includes(this.state.input.toUpperCase())){
                        return option
                    }
                }).map((book,idx) => (
             
                <button className="search-book-link" key={book.id} onClick={this.handleDropdown(book.title)} >{book.title}</button> 

                // <button key={book.id} onClick={() => {alert('TEST');}} value={book.id}>{book.title}</button>        
                
              ))
            )
        }    
        
       
        return (
            
            <div className="searchbar">
                {/* <Link to="/"> */}
                    <button id="search-all" onClick={()=>this.props.history.push("/")}>All &nbsp;▾</button>
                {/* </Link> */}
                    <form className="nav-search-bar-with-icon" onSubmit={this.handleSubmit}>
                  
                    <input id="nav-search-bar" type="text"  onChange={this.handleInput} autoComplete="off"/>
                    {/* <div className={searchBookTitle.length > 0 ? "search-dropdown-container": null}></div> */}
                    <button className="search-icon-btn" type="submit"><img className="search-icon" src={window.search_icon} alt="Search" /></button>
                    <div className="search-dropdown" >
                        {searchBookTitle }
                    </div>

             
                    </form>  

        </div>
        )
    }
}

export default withRouter(SearchBar);
