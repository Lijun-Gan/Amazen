import React from 'react';


class BookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchBooks()
  }

  render() {
    const { books } = this.props;
    debugger
    return (
      <div>
        <h1>Books</h1>
      </div>
    )
  }
}

export default BookIndex;
