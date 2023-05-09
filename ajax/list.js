function showALl() {
    $.ajax({
        type: "GET", url: "http://localhost:8080/job", success(data) {
            console.log(data);
            let context = ''
            for (let i = 0; i < data.length; i++) {
                context += `<div class="detail width-100">
                            <div class="media display-inline text-align-center" xmlns="http://www.w3.org/1999/html">
                            <img src="${data[i].src}" alt="John Doe"  width="90px"  height="90px" class="mr-3 "style="margin-top: 50px">
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
                            <button onclick="deleteById(${data[i].id})" class="part-full-time">Update</button></br>
                            <button onclick="deleteById(${data[i].id})" class="part-full-time">Delete</button></br>
                            <button onclick="saveId(${data[i].id})" class="part-full-time" >View</button><br>
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

function saveId(id) {
    localStorage.setItem("idTest", id);
    window.location.href = "job_detail.html";
}


function deleteById(id) {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/job/" + id,
        success() {
            showALl()
        }
    })
}

function showAllQualification() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/qualification",
        success(data) {
            console.log(data)
            let content = ``
            content += `<option onclick="showALl()">All</option>`
            for (let i = 0; i < data.length; i++) {
                content += `<option value="${data[i].id}" onclick="searchByQualification()">${data[i].name}</option>`
            }
            content += ``
            document.getElementById("search-product").innerHTML = content;
        }
    })
}


function searchByQualification() {
    let qualification = $('#qualification').val()
    let search = {
        qualification: qualification
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
                            <img src="${data[i].src}" alt="John Doe"  width="90px"  height="90px" class="mr-3 "style="margin-top: 50px">
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
                            <button onclick="deleteById(${data[i].id})" class="part-full-time">Update</button></br>
                            <button onclick="deleteById(${data[i].id})" class="part-full-time">Delete</button></br>
                            <button onclick="saveId(${data[i].id})" class="part-full-time" >View</button><br>
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

showALl()