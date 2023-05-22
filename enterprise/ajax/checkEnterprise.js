function checkEnterpriseRequired(id) {
    console.log(id)
    $.ajax({
        type: "PATCH",
        url: "http://localhost:8080/enterprise/" + id,
        success(data) {
            if (data.status == false) {
                alert("Your account has not been approved")
            } else document.getElementById("postJobEnterprise").href = "create_job.html";
        }
    });
    event.preventDefault();
}

checkEnterpriseRequired(localStorage.getItem("idUser"))