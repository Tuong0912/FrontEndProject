
function view() {
    let id = localStorage.getItem("idTest");
    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/job/" + id,
        success(data) {
            console.log(data)
            let context = ``
            context = `
                        <div class="container background-color-full-white job-Details">
                        <div class="Exclusive-Product">
                        <h3>${data.content}</h3>
                        <a href="#" class="Apply-Now">Apply Now</a>
                        <h6 class="font-color-orange">Company : ${data.enterprise.name}</h6>
                        <a href="#">View more similar jobs</a>
                        <i class="material-icons">place</i>
                        <span class="text">${data.city.name}</span>
                        <h4>Short description</h4>
                        <p>${data.shortDescription}</p>
                        </div>
                        <img src="${data.src}" width="0,1px"  height="400px"  alt="John Doe" class="job-detail-img">
                        <div class="Job-Description">
                        <h4>Job Description / Responsibility</h4>
                        <p>${data.longDescription}</p>
                        <div class="vertical-space-20"></div>
                        <h4>Experience & Requirement</h4>
                        <p class="margin-bottom">Experience required : ${data.experience}</p>
                        <div class="float-right margin-top ">
                                <p class="date-time"> Ex</p>
                        </div>
                        </div>
                        </div>
                       
                        `

            document.getElementById("view_job").innerHTML = context
        }
    })
    // event.preventDefault()
}

view();