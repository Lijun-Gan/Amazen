import React from 'react';
import CartItem from './cart_item';
import { Link, Redirect } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: JSON.parse(localStorage.getItem(this.props.currentUserId)),
        };

        this.handleRemoveAllItems = this.handleRemoveAllItems.bind(this);
        this.handleRemoveOneItem = this.handleRemoveOneItem.bind(this);
        this.handlePurchaseButton = this.handlePurchaseButton.bind(this);
        // this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
    }
    // componentDidMount() {
    //     if (Object.values(this.state.books).length < 1) {
    //         return <Redirect to="/" />;
    //     }
    // }
    // componentDidUpdate() {
    //     if (Object.values(this.state.books).length < 1) {
    //         return <Redirect to="/" />;
    //     }
    // }

    // calculateTotalPrice() {
    //     let total = 0;
    //     Object.values(this.state.books).map((book) => {
    //         total += book.price;
    //     });
    //     console.log('total price calculated');
    //     return total;
    // }

    handleRemoveAllItems() {
        localStorage.clear();
    }

    handleRemoveOneItem(bookId) {
        delete this.state.books[bookId];

        localStorage.setItem(this.props.currentUserId, JSON.stringify(this.state.books));
        this.setState({
            books: this.state.books,
        });
    }
    handlePurchaseButton() {
        let books = Object.values(this.state.books);

        books.map((book) => {
            this.props.createCart({ user_id: this.props.currentUserId, book_id: book.id });
        });

        localStorage.clear();
        this.setState({
            books: [],
        });
        // return <Redirect to="/" />;
    }

    render() {
        if (this.state.books === null || Object.values(this.state.books) < 1) {
            // return <Redirect to="/" />;
           return  <h1>Shopping cart is empty</h1>
        }

        const mappedBooks =
            this.state.books &&
            Object.values(this.state.books).map((book, idx) => {
                return (
                    <li key={`shop-cart-${idx}`}>
                        {<CartItem handleRemoveOneItem={this.handleRemoveOneItem} book={book} />}
                    </li>
                );
            });

        return (
            <div className="shopping-cart-container">
                <div className="shopping-cart-header">
                    <p>
                        <span>All Products </span> {'>'} Your  Cart
                    </p>
                    <h1>Your  Cart</h1>
                </div>
                <div className="transition-bar"></div>
                <div className="shopping-cart-body">
                    <ul>{mappedBooks}</ul>
                </div>
                <div className="shopping-cart-bottom">
                    <div className="estimated-total">
                        <p>Estimated Total</p>
                        {}
                    </div>
                    <div className="purchase-row">
                        <div className="purchase-button" onClick={() => this.handlePurchaseButton()}>
                            Purchase for myself
                        </div>
                    </div>
                </div>
                <div className="under-cart">
                    <div className="remove-all-box" onClick={() => this.handleRemoveAllItems()}>
                        <Link to="/">
                            <p>Remove all items</p>
                        </Link>
                    </div>

                    <div className="continue-shopping-box">
                        <Link to="/">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;