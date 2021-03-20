import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            item: ''
        };
    this.handleInput = this.handleInput.bind(this);
    }

    handleInput(field){
        return (e) => {console.log(field) }
    }

    render(){
       
        return (
            <div className="searchbar">
                <div className="nav-search-bar-container">
                    <input className="nav-search-bar" type="text" value={this.state.searchTerm} onChange={this.handleInput("item")}/>
                    <button><img id="search-icon" src={window.search_icon} alt="Search" /></button>
                </div>  
            </div>
        )
    }
}

export default withRouter(SearchBar);
