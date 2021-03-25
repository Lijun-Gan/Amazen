import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { book } = this.props;
        // const reviewNum = book && book.id * 1047 + 453;

        return (
            <div className="shopping-cart-item">
                <h1>hi</h1>
               
            </div>
        );
    }
}

export default CartItem;