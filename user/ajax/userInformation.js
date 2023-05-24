function userInformation(id) {
    console.log(id)
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/user/" + id,
        success(data) {
            document.getElementById("userInformation").innerHTML = `<ul class="top_bar_contact_list">
    <li>
        <i class="fa fa-phone coll" aria-hidden="true"></i>
        <div class="contact-no">${data.phone}</div>
    </li>
    <li>
        <i class="fa fa-envelope coll" aria-hidden="true"></i>
        <div class="email">
        <a href="userDetail.html"
            class="__cf_email__"
            data-cfemail="3f5a475e524f535a7f55505d4b5a515b115c5052" style="color: black">${data.email}</a>
        </div>
    </li>
</ul>`


        }


    });
}

userInformation(localStorage.getItem("idUser"))

