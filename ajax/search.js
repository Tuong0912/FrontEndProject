function searchBySalaryRange() {
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/job/search",
        success(data) {
            let context = ``
            context += `<p >
                        <input type="text" id="amount1" class="salery-range"> <i class="fa fa-minus minus"></i>
                        <input type="text" id="amount2" class="salery-range"></p>
                    <div id="slider-range"></div>`
            document.getElementById("searchRangeSalary").innerHTML = context;
        }
    })
}

