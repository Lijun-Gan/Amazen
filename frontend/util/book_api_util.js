export const fetchBook = (bookId)=>{
    
    return   $.ajax({
                method: "GET",
                url: `/api/books/${bookId}`,
        })

}

export const fetchBooks = () => (
        $.ajax({
            url: '/api/books',
            method: 'GET',
        })
)

export const fetchBooksTitles = () => (
        $.ajax({
            url: '/api/books/booksTitles',
            method: 'GET',
        })
)

export const fetchBestBooks = () => (
        $.ajax({
            method: 'GET',
            url: `/api/books/bestBooks`,
        })
)
export const fetchCelebrityPicks= () => (
        $.ajax({
            method: 'GET',
            url: `/api/books/celebrityPicks`,
        })
)
export const fetchBookBox= () => (
        $.ajax({
            method: 'GET',
            url: `/api/books/bookBox`,
        })
)

export const fetchBooksDiscount = () => (
        $.ajax({
            method: 'GET',
            url: `/api/books/discount`,
        })
)

export const fetchBooksRecommendation = () => (
        $.ajax({
            method: 'GET',
            url: `/api/books/recommendation`,
        })
)

export const fetchBooksPrime = () => (
        $.ajax({
            method: 'GET',
            url: `/api/books/prime`,
        })
)
export const fetchBooksCategory = (category) => (
        $.ajax({
            method: 'GET',
            url: `/api/books/categories/${category}`,
        })
)

export const fetchBooksFormat = (format) => (
        $.ajax({
            method: 'GET',
            url: `/api/books/formats/${format}`,
        })
)

export const fetchBooksTitle = (title) => (
        $.ajax({
            method: 'GET',
            url: `/api/books/titles/${title}`,
        })
)






