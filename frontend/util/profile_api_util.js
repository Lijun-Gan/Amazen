export const fetchUserReviews = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}/reviews`
    })
);


export const updateProfile = (user) => {
    return $.ajax({
            method: "PATCh",
            url: `/api/users/${user.id}`,
            data: {user}
        })

}
