export const signup = (user)=>(
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: {user}
    })
);

export const signin = (user) =>(
    $.ajax({
        method: "POST",
        url: "/api/session",
        data: {user}
    })
);

export const signout = () =>(
    $.ajax({
        method: "DELETE",
        url: "/api/session",

    })
);

export const checkUser = (email_or_phone) =>(
    $.ajax({
        method: "GET",
        url: "/api/users/exists",
        data: {email_or_phone}
    })
);

export const updateZipCode = (user) =>(
    $.ajax({
        method: "GET",
        url: "/api/users/updateZipCode",
        data: {user}
    })
);

