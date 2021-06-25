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

export const fetchBooksRecommendation = () => (
        $.ajax({
            method: 'GET',
            url: `/api/books/recommendation`,
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






