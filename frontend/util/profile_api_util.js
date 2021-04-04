export const fetchUserReviews = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/user/${userId}/reviews`
    })
);