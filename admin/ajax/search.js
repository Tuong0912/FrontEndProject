function searchByQualificationAndCityAndSalary() {
    let minSalary = $('#minSalary').val()
    let maxSalary = $('#maxSalary').val()
    let qualification = $('#qualification').val()
    let city = $('#city').val()
    let search = {
        minSalary: minSalary,
        maxSalary: maxSalary,
        qualification: qualification,
        city: city
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/job/qualification",
        data: JSON.stringify(search),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success(data) {
            console.log(data)
            let context = ``
            for (let i = 0; i < data.length; i++) {
                context += `<div class="detail width-100">
                            <div class="media display-inline text-align-center" xmlns="http://www.w3.org/1999/html">
                            <img src="${data[i].src}" alt="John Doe"  width="90px"  height="90px" class="mr-3 " style="margin-top: 50px">
                            <div class="media-body text-left  text-align-center">
                            <h6><a href="#" class="font-color-black">${data[i].content}</a></h6>
                            <i class="large material-icons">account_balance</i>
                            <span class="text">${data[i].enterprise.name}</span>
                            <br>
                            <ion-icon name = "book-outline">account_balance</ion-icon>
                            <span class="text">${data[i].qualification.name}</span>
                            <br/>   
                            <i class="large material-icons">place</i>
                            <span class="text font-size">${data[i].city.name}</span>
                            <div class="float-right margin-top text-align-center">
                            <button onclick="updateById(${data[i].id})" class="part-full-time">Update</button></br>
                            <button onclick="deleteById(${data[i].id})" class="part-full-time">Delete</button></br>
                            <button onclick="saveId(${data[i].id})" class="part-full-time" >View</button><br>
                            <p class="date-time">Post Day : ${data[i].postDate}</p>
                            </div>
                            </div>
                            </div>
                            </div>`
            }
            context += `<div class="vertical-space-20"></div>
                        <div class="vertical-space-25"></div>
                        <div class="job-list width-100">
                            <ul class="pagination justify-content-end margin-auto">
                                <li class="page-item"><button class="page-link pdding-none" href="javascript:void(0);" onclick="findAll(0)">First</button></li>
                                <li class="page-item"><a class="page-link pdding-none" href="javascript:void(0);" onclick="prevPage()"> <i class=" material-icons keyboard_arrow_left_right">keyboard_arrow_left</i></a></li>`;
            for (let i = 0; i < data.totalPages; i++) {
                context += `<li class="page-item"><a class="page-link" onclick="findAll(${i})" href="#">${i + 1}</a></li>`;
            }
            context += `<li class="page-item"><a class="page-link pdding-none" href="javascript:void(0);" onclick="nextPage()"> <i class=" material-icons keyboard_arrow_left_right">keyboard_arrow_right</i></a></li>
                        <li class="page-item"><button class="page-link pdding-none" href="javascript:void(0);" onclick="findAll(${data.totalPages - 1})">Last</button></li>
                            </ul>
                        </div>`;
            document.getElementById("display").innerHTML = context;
        }
    });
    event.preventDefault()
}



