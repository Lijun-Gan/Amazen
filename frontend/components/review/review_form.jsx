import React from 'react';

class PostForm extends React.Component{
    constructor(props){
        super(props)
        debugger
        this.state = this.props.review
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(e){
        e.preventDefault();
        //  console.log(this.state)
        this.props.action(this.state);
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value});
        };
    }

    render(){
        // debugger
        return(
            <div>
                <h3>Create Review</h3>
        
            <form onSubmit={this.handleSubmit}>
                <label>Overall rating:
                    <input type="text" 
                    value={this.state.rating}
                    onChange={this.handleInput('title')}
                    />
                </label>

                <label>Title:
                    <input type="text" 
                    value={this.state.title}
                    onChange={this.handleInput('title')}
                    />
                </label>
                <label>Body:
                <textarea onChange={this.handleInput('body')}
                value={this.state.body}></textarea>
                </label>
                <button>{this.props.formType === "Create Post"? "Create Post" : "Update Post"}</button>
            </form>

            </div>
        )
    }
}

export default PostForm;