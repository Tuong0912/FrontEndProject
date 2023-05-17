function showTopRecruitments() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/job/showTop",
        success(data) {
            console.log(data)
            let context = ``
            context += `<h5  class="text-left">Top Highest Recruitments</h5>`
            for (let i = 0; i < data.length; i++) {
                context += `<div onclick="saveId(${data[i].id})">
                                <div class="media display-inline text-align-center" >
                                    <img src="${data[i].src}" alt="John Doe" width="45px" height="45px" class="mr-3" style="margin-top: 30px">
                                    <div class="media-body text-left text-align-center" style="margin-top: 32px">
                                        <h10 class="text font-size">${data[i].content}</h10>
                                    </div>
                                </div>
                            </div>`
            }
            document.getElementById("showTop").innerHTML = context;
        }
    })
}

showTopRecruitments()