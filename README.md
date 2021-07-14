# <p align="center">   Welcom to <img src="app/assets/readme_assets/logo.png" width="50" hight="30">  Amazen  </p>

![Amazen](app/assets/readme_assets/homepage.png)

Amazen, an Amazon clone, allows users to browse, purchase, and review books. All users can send feedback directly to Amazen, and search books by book format, title, categories, prime, discount and so on. Only logged-in users can add books to wishlist, edit their profile information, and track their shopping cart items and placed orders history. Technologies include: Ruby, Ruby on Rails, PostgreSQL, React, Redux, AJAX, Node.js, HTML5, CSS, JavaScript, Webpack, Heroku, Git, and Github.

# <p align="center"> [Check Out the Live App!][1] </p>

## Table of Contents

* [User Auth](#User-Auth)
* [Filter and Search](#Filter-and-Search)
* [Profile](#Profile)
* [Review](#Review)
* [Shopping Cart](#Shopping-Cart)
* [Order](#Order)
* [Wish List](#Wish-List)


## User Auth
![UserAuth](app/assets/readme_assets/userAuth.gif)

* User create an account with username, email and password
* User can sign in with users' email or phone number (phone number can be added in profile page once sign in)

```js

//signup.js 

    if (errors_count === 0) {
        this.props.signup(this.state.user)
            .then( ()=> this.props.history.push("/"), (response)=>{
                if(response.errors.includes("Email has already been taken")){
                    this.setState({
                        errors: {
                            username: this.state.errors.username,
                            email: this.state.errors.email,
                            password: this.state.errors.password,
                            rePassword: this.state.errors.rePassword,
                            matchPassword:this.state.errors.matchPassword,
                            emailTaken: "Email address already in use"
                        }
                    });
                }
            } 
        );
    }

```
 
## Filter and Search

![Filter](app/assets/readme_assets/filter.gif)

* User can filter books by category, format, deals, prime and so on.  
* User can search books by the book's title.
* Books in the book index page are displayed with its title, image, price, rating, format, discount, author and prime.
* Books in the home page has all the infomation like the book in the book index page, except format, discount, author.

```js

//search_bar.js 

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
                
              ))
            )
        } 

```

## Review

![Review](app/assets/readme_assets/review.gif)

* User can creat a new review for a book.   
* User can edit or delete the reviews they made.

```js

//review_form.js 

    handleInput(type){
        
        const { review } = { ...this.state };
        const currentState = review;

        return (e) => {
            currentState[type] = e.target.value
            this.setState({ review: currentState});
        };
    }

```

## Profile

![Profile](app/assets/readme_assets/profile.gif)

* User can check, edit and delete the reviews they made.  
* User can add or edit their full name, phone number and zipcode.


```js

//user_review_item.js 

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            if(this.state.showReviewBtn){
                let popup = document.getElementById(this.state.showReviewBtnId);
                popup.classList.toggle("show");
        
                this.setState({showReviewBtn: !this.state.showReviewBtn,
                    showReviewBtnId: '',
                });
            }
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

```

## Shopping Cart

![Shopping Cart](app/assets/readme_assets/cart.gif)

* User can add book to shopping cart.
* User can edit their the quantity of the books in the shopping cart.
* User can remove the books from shopping cart.
* User can proceed to checkout.

```js

//cart.js 
    let cartBooks = Object.values(cartBooksLocalStorage.cartItems);
    if(cartBooks && cartBooks.length > 0){

        cartBooksLocalStorage["cartItems"] = {}
        localStorage.setItem(this.props.currentUserId , JSON.stringify(cartBooksLocalStorage));

        this.setState({
            cartBooks: [],
        });

        cartBooks.map((cartBook) => {
            this.props.createOrder(cartBook)
            this.props.removeCart(cartBook.book_id.toString() + "_" + cartBook.format)
        });
        
```

## Order

![Order](app/assets/readme_assets/order.gif)

* User can search orders by the book's title.
* User can return the order.
* User can write a book review.
* User can add the purchased item to the cart.
* User can get product support.

```js

//order.js 
    handleSubmit(action){
        return (e)=>{
            e.preventDefault()

            if(action === "submit"){
                this.setState({
                    search: e.target.search.value
                })
            }else{
                document.getElementById("clear-search").value = "";
                this.setState({
                search: ""
             })
            }
        }
    }
        
```


## Wish List

![Wishlist](app/assets/readme_assets/wishlist.gif)

* User can add book to the wish list.
* User can remove item from the wish list.
* User can add the wish list item to the cart.

  
 



[1]: https://amazen2021.herokuapp.com/#/