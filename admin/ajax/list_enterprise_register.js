function showAllEnterprise() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/enterprise",
        success(data) {
            console.log(data);
            let context = '';
            for (let i = 0; i < data.content.length; i++) {
                context += `<div class="detail width-100">
                                <div class="media display-inline text-align-center">
                                    <img src="${data.content[i].avatar}" alt="John Doe" width="90px" height="90px" class="mr-3" style="margin-top: 50px">
                                    <div class="media-body text-left text-align-center">
                                        <h6><a class="font-color-black">${data.content[i].name}</a></h6>
                                        
                                        <i class="fa fa-phone coll" aria-hidden="true"></i>
                                        <span class="text">${data.content[i].phoneNumber}</span>
                                        <br>
                                        <i class=" fa fa-envelope" aria-hidden="true"></i>
                                        <span class="text">${data.content[i].gmail}</span>
                                        <br/>   
                                        <i class="large material-icons">place</i>
                                        <span class="text font-size">${data.content[i].address}</span>
                                        <div class="float-right margin-top text-align-center">
                                            <button onclick="browseAEnterprise(${data.content[i].id})" class="part-full-time">Browse</button></br>
                                            <button onclick="deleteById(${data.content[i].id})" class="part-full-time">Delete</button></br>
                                            <button onclick="saveId(${data.content[i].id})" class="part-full-time">View</button><br>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
            }
            context += `<div class="vertical-space-20"></div>
                        <div class="vertical-space-25"></div>
                        <div class="job-list width-100">
                            <ul class="pagination justify-content-end margin-auto">
                                <li class="page-item"><button class="page-link pdding-none" href="javascript:void(0);" onclick="findAll(0)">First</button></li>
                                <li class="page-item"><a class="page-link pdding-none" href="javascript:void(0);" onclick="prevPage()"> <i class=" material-icons keyboard_arrow_left_right">keyboard_arrow_left</i></a></li>`;
            for (let i = 0; i < data.totalPages; i++) {
                context += `<li class="page-item"><button class="page-link" onclick="findAll(${i})" href="#">${i + 1}</button></li>`;
            }
            context += `<li class="page-item"><a class="page-link pdding-none" href="javascript:void(0);" onclick="nextPage()"> <i class=" material-icons keyboard_arrow_left_right">keyboard_arrow_right</i></a></li>
                        <li class="page-item"><button class="page-link pdding-none" href="javascript:void(0);" onclick="findAll(${data.totalPages - 1})">Last</button></li>
                            </ul>
                        </div>`;
            document.getElementById("enterprise_display").innerHTML = context;
        }
    });
}

function findAll(page) {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/enterprise?page=${page}`,
        success(data) {
            let context = '';
            for (let i = 0; i < data.content.length; i++) {
                context += `<div class="detail width-100">
                                <div class="media display-inline text-align-center">
                                    <img src="${data.content[i].avatar}" alt="John Doe" width="90px" height="90px" class="mr-3" style="margin-top: 50px">
                                    <div class="media-body text-left text-align-center">
                                        <h6><a class="font-color-black">${data.content[i].name}</a></h6>
                                        <i class="large material-icons">account_balance</i>
                                        <span class="text">${data.content[i].phoneNumber}</span>
                                        <br>
                                        <ion-icon name="book-outline">account_balance</ion-icon>
                                        <span class="text">${data.content[i].gmail}</span>
                                        <br/>   
                                        <i class="large material-icons">place</i>
                                        <span class="text font-size">${data.content[i].address}</span>
                                        <div class="float-right margin-top text-align-center">
                                            <button onclick="deleteById(${data.content[i].id})" class="part-full-time">Delete</button></br>
                                            <button onclick="saveId(${data.content[i].id})" class="part-full-time">View</button><br>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
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
            document.getElementById("enterprise_display").innerHTML = context;
        }
    });
    event.preventDefault()
}

function nextPage() {
    let currentPage = parseInt(document.querySelector('.pagination .active').innerText) - 1;
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/enterprise?page=${currentPage + 1}`,
        success(data) {
            console.log(data);
            let context = '';
            for (let i = 0; i < data.content.length; i++) {
                context += `<div class="detail width-100">
                                <div class="media display-inline text-align-center">
                                    <div class="media-body text-left text-align-center">
                                        <h6><a href="#" class="font-color-black">${data.content[i].name}</a></h6>
                                        <i class="large material-icons">account_balance</i>
                                        <span class="text">${data.content[i].phoneNumber}</span>
                                        <br>
                                        <ion-icon name="book-outline">account_balance</ion-icon>
                                        <span class="text">${data.content[i].gmail}</span>
                                        <br/>   
                                        <i class="large material-icons">place</i>
                                        <span class="text font-size">${data.content[i].address}</span>
                                        <div class="float-right margin-top text-align-center">
                                            <button onclick="deleteById(${data.content[i].id})" class="part-full-time">Delete</button></br>
                                            <button onclick="saveId(${data.content[i].id})" class="part-full-time">View</button><br>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
            }
            context += `<div class="vertical-space-20"></div>
                        <div class="vertical-space-25"></div>
                        <div class="job-list width-100">
                            <ul class="pagination justify-content-end margin-auto">
                                <li class="page-item"><a class="page-link pdding-none" href="javascript:void(0);" onclick="findAll(0)">First</a></li>
                                <li class="page-item"><a class="page-link pdding-none" href="javascript:void(0);" onclick="prevPage()"> <i class=" material-icons keyboard_arrow_left_right">keyboard_arrow_left</i></a></li>`;
            for (let i = 0; i < data.totalPages; i++) {
                context += `<li class="page-item"><a class="page-link" onclick="findAll(${i})" href="#">${i + 1}</a></li>`;
            }
        }
    })
}

function browseAEnterprise(id) {
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/enterprise/browse/" + id,
        success() {
            alert("Browse a Enterprise success !")
            showAllEnterprise();
        }
    })
}

showAllEnterprise();