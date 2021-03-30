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

export const fetchCategoryBooks = (category) => (
        $.ajax({
            method: 'GET',
            url: `/api/books/categories/${category}`,
        })
)






