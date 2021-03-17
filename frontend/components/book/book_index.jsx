import React from 'react';


class BookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { chirps } = this.props;
    return (
      <div>
        <h1>Books</h1>
      </div>
    )
  }
}

export default BookIndex;
