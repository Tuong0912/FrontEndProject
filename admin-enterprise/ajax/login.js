function register() {
    let fullname = $('#fullname').val()
    let email = $('#email').val()
    let password = $('#password').val()
    let rewritePassword = $('#rewritePassword').val()
    if (email === "" || password === "" || rewritePassword === "") {
        alert("Fill all the the form before register")
        event.preventDefault()
    } else if (fullname.length < 6 || fullname > 50) {
        alert("Fullname have only 6 to 50 letters")
        event.preventDefault()
    } else if (email.length < 6 || email > 32) {
        alert("email have only 6 to 32 letters")
        event.preventDefault()
    } else if (password.length > 8 || password.length < 6) {
        alert("Password have only 6 to 8 letters")
        event.preventDefault()
    } else if (password !== rewritePassword) {
        alert("Invalid rewritepassword")
        event.preventDefault()
    } else {
        let user = {
            fullname: fullname,
            email: email,
            password: password
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/user/register",
            contentType: 'application/json',
            data: JSON.stringify(user),
            success(data) {
                console.log(data)

            }
        })
        alert("Register success")
        event.preventDefault()
    }

}

function login() {
    let userLogin;
    let email = $('#loginName').val()
    let password = $('#loginPassword').val()
    let user = {
        email: email,
        password: password
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/user/login",
        contentType: 'application/json',
        data: JSON.stringify(user),
        success(data) {
            userLogin = data.user1234567890;
            localStorage.setItem("idUser", userLogin.id)
            console.log(localStorage.getItem("idUser"))
            window.location.href = "list_job.html"
        }
    });
}

function logout() {
    localStorage.setItem("idUser", "")
    window.location.href = "login.html";
}

