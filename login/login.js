function register() {
    let fullname = $('#fullname').val()
    let email = $('#email').val()
    let password = $('#password').val()
    let rewritePassword = $('#rewritePassword').val()
    let role = document.getElementById("role").value
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
            password: password,
            role: {
                "id": role
            }
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
            console.log(userLogin)
            localStorage.setItem("idUser", userLogin.id)
            localStorage.setItem("user_fullname", userLogin.fullname)
            localStorage.setItem("user_password", userLogin.password)
            localStorage.setItem("user_email", userLogin.email);
            localStorage.setItem("user_phone", userLogin.phone)
            localStorage.setItem("user_address", userLogin.address)
            localStorage.setItem("user_role_id", userLogin.role.id)
            localStorage.setItem("user_role_name", userLogin.role.name)
            console.log("user_email" + localStorage.getItem("user_email"))
            console.log("user_fullname" + localStorage.getItem("user_fullname"))
            console.log("user_password" + localStorage.getItem("user_password"))
            console.log("idUser" + localStorage.getItem("idUser"))
            console.log("user_phone" + localStorage.getItem("user_phone"))
            console.log("user_address" + localStorage.getItem("user_address"))
            console.log("role_id" + localStorage.getItem("user_role_id"))
            console.log("role_name" + localStorage.getItem("user_role_name"))

            if (userLogin === null) {
                alert('Wrong account or password')

            } else if (userLogin.aBoolean === false) {
                alert('Your account has not been approved')

            } else {
                alert("Welcome " + userLogin.fullname)
                if (userLogin.role.id === 3) {
                    window.location.href = "http://localhost:63343/Big%20Project/user/html/list_user_job.html?_ijt=g895c50pq40ep66davi44dppph&_ij_reload=RELOAD_ON_SAVE"
                } else if (userLogin.role.id === 2) {
                    window.location.href = "http://localhost:63342/Big%20Project/enterprise/html/list_enterprise_job.html?_ijt=goq8ljlcnkt761a1j3k6l270s5&_ij_reload=RELOAD_ON_SAVE";
                } else {
                    window.location.href = "http://localhost:63342/Big%20Project/admin/html/list_job_approved.html?_ijt=goq8ljlcnkt761a1j3k6l270s5&_ij_reload=RELOAD_ON_SAVE"
                }
            }

        }
    });
}

function logout() {
    localStorage.setItem("idUser", "")
    window.location.href = "login.html";
}

function role() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/role",
        success(data) {
            let context = ``
            for (let i = 0; i < data.length; i++) {
                context += `<option id="signuprole" value="${data[i].id}">${data[i].name}</option>`
            }
            context += ``
            document.getElementById("role").innerHTML = context;
        }
    })
}

role()