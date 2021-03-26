

export const createReview = (review) => {
    // 
    return  $.ajax({
        method: "POST",
        url: "/api/reviews",
        data: {review}
    })

}


export const updateReview = (review) => (
    $.ajax({
        method: "PATCH",
        url: `/api/reviews/${review.id}`,
        data: {review}
    })
);
    
export const deleteReview = (review) => (
    $.ajax({
        method: "DELETE",
        url: `/api/reviews/${review.id}`,
        data: { review }
    })
);

export const fetchReview = (reviewId) => {
    // 
    return(
         $.ajax({
            method: "GET",
            url: `/api/reviews/${reviewId}`
        })
    )   

}

