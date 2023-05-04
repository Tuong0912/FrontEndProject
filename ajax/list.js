function showALl() {
    $.ajax({
        type: "GET", url: "http://localhost:8080/job", success(data) {
            console.log(data);
            let context = ''
            for (let i = 0; i < data.length; i++) {
                context += `<div class="detail width-100"><div class="media display-inline text-align-center" xmlns="http://www.w3.org/1999/html">
                            <img src="${data[i].src}" alt="John Doe"  width="90px"  height="90px" class="mr-3 ">
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

function saveId(id){
    localStorage.setItem("idTest", id);
    window.location.href = "http://localhost:63342/Big%20Project/job_detail.html?_ijt=dc98tjpp4ek32p1t90v70kgtb&_ij_reload=RELOAD_ON_SAVE";
}

showALl()