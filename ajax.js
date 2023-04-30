function showALl() {
    $.ajax({
        type: "GET", url: "http://localhost:8080/job", success(data) {
            let context = ``
            for (let i = 0; i < data.length; i++) {
                context += `<div class="detail width-100"><div class="media display-inline text-align-center" xmlns="http://www.w3.org/1999/html">
<img src="${data[i].src}" alt="John Doe"  width="90px"  height="90px" class="mr-3 ">
<div class="media-body text-left  text-align-center">
<h6><a href="#" class="font-color-black">${data[i].content}</a></h6>
<i class="large material-icons">account_balance</i>
<span class="text">${data[i].name}</span>
<br>
<ion-icon name = "book-outline">account_balance</ion-icon>
<span class="text">${data[i].qualification.name}</span>
<br/>
<i class="large material-icons">place</i>
<span class="text font-size">${data[i].city.name}</span>
<div class="float-right margin-top text-align-center">
<button onclick="view(${data[i].id})" class="part-full-time" >View</button><br>
<p class="date-time">Post Day : ${data[i].postDate}</p>
</div>
</div>
</div>
</div>`
            }
            document.getElementById("display").innerHTML = context;
        }

    })
}

function view(id) {
    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/job/" + id,
        success(data) {
            console.log(data)
            document.getElementById("view").innerHTML = `<section id="job-Details">
<div class="container background-color-full-white job-Details">
<div class="Exclusive-Product">
<h3>${data.content}</h3>
<a href="#" class="Apply-Now">Apply Now</a>
<h6 class="font-color-orange">Airbnx Expross Soft</h6>
<a href="#">View more similar jobs</a>
<i class="material-icons">place</i>
<span class="text">${data.city.name}</span>
<h4>Short description</h4>
</div>
<img src="imags/job-detail.jpg" alt="" class="job-detail-img">
<div class="Job-Description">
<h4>Job Description / Responsibility</h4>

<div class="vertical-space-20"></div>
<h4>Experience & Requirement</h4>

</div>
</div>
</section>
`
        }
    })
    event.preventDefault()
}

showALl()