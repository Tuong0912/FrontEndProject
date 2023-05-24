function userDetail() {
    let user_id = localStorage.getItem("idUser")
    let fullname = localStorage.getItem("user_fullname")
    let password = localStorage.getItem("user_password")
    let email = localStorage.getItem("user_email")
    let phone = localStorage.getItem("user_phone")
    let address = localStorage.getItem("user_address")
    let role_id = localStorage.getItem("user_role_id")
    let role_name = localStorage.getItem("user_role_name")
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/user/" + user_id,
        success() {
            let context = ``
            context += `                    <div class="clear">
                        <div class="col-sm-3 col-sm-offset-1">
                            
                        </div>

                        <div class="col-sm-3 padding-top-25">
                            <div class="form-group">
                                <label>Email</label>
                                <input id="email" value="${email}" type="text" class="form-control">
                            </div><div class="form-group">
                                <label>Full name</label>
                                <input id="fullName" value="${fullname}" type="text" class="form-control">
                            </div>
                            <div>
                                <label>Password</label>
                                <input id="password" value="${password}" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-3 padding-top-25">
                            <div class="form-group">
                                <label>Phone</label>
                                <input type="text" value="${phone}" id="phone" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Address</label> 
                                <input id="address" value="${address}" type="text" class="form-control">
                            </div><div class="form-group">
                                <label>Role</label> 
                                <input id="role" value="${role_id}" type="text" class="form-control" hidden="hidden" readonly>
                                <input value="${role_name}" type="text" class="form-control" readonly>
                            </div>
                        </div>
                        <div class="col-sm-5 col-sm-offset-1" style="text-align: right">
                            <br>
                            <button type='button' class='btn btn-finish btn-primary' onclick="updateUser(${user_id})" name='finish' value="Update">Update</button>
                        </div>
                    </div>`
            document.getElementById("userDetail").innerHTML = context;

        }
    })

}

function updateUser(id) {
    let email = $('#email').val()
    let fullname = $('#fullName').val()
    let password = $('#password').val()
    let phone = $('#phone').val()
    let address = $('#address').val()
    let role = document.getElementById("role").value
    let newUser = {
        email: email,
        fullname: fullname,
        password: password,
        phone: phone,
        address: address,
        role:{
            "id" : role
        }
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8080/user/updateUser/" + id,
        data: JSON.stringify(newUser),
        success(data) {
            console.log(data)
            alert("update success")
        }
    });
    event.preventDefault()
}

userDetail();