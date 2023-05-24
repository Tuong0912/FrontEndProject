function userDetail() {
    let user =  localStorage.getItem("idUser")
    let email = localStorage.getItem("user_id")
    console.log(user)
    console.log(email)
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/user/" + user.id
    })
    let context = ``
    context += `                    <div class="clear">
                        <div class="col-sm-3 col-sm-offset-1">
                            
                        </div>

                        <div class="col-sm-3 padding-top-25">
                            <div class="form-group">
                                <label>Full name</label>
                                <input id="fullName" type="text" class="form-control">
                            </div>
                            <div>
                                <label>Password</label>
                                <input id="password" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-3 padding-top-25">
                            <div class="form-group">
                                <label>Phone</label>
                                <input type="text" id="phoneNumber" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <input id="address" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-5 col-sm-offset-1" style="text-align: right">
                            <br>
                            <input type='button' class='btn btn-finish btn-primary' name='finish' value='Finish'/>
                        </div>
                    </div>
`
    document.getElementById("userDetail").innerHTML = context;
}

userDetail();