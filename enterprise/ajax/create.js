$(document).ready(function () {
    $('.quantity-input').bind("cut copy paste drag drop", function (e) {
        e.preventDefault();
    });
});

function isNumberKey(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


function createForm() {
    let context = ``
    context += `<form>
    <div class="form-group">
        <label for="content">Job title</label>
        <input type="text" class="form-control" id="content" placeholder="Enter your job title" required />
    </div>
    <div class="row">
        <div class="col-lg-6 col-md-6">
            <div class="form-group">
                <label for="company">Company</label>
                <select class="form-control" name="sellist1" id="enterprise"></select>
            </div>
        </div>
        <div class="col-lg-6 col-md-6">
            <div class="form-group">
                <label for="location">City</label>
                <select class="form-control" name="sellist1" id="city"></select>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-10 col-md-10">
            <div class="form-group ">
                <label>Company Logo</label>
                <div class="box text-center">
                        <input type="text"  id="src" class="input-group-text inputfile-4"/>
                </div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="shortDescription">Short Description</label>
        <textarea class="form-control small" id="shortDescription" placeholder="Write short description" rows="3" required></textarea>
    </div>
    <div class="form-group">
        <label for="longDescription">Write full description</label>
        <textarea class="form-control large" id="longDescription" placeholder="Write short description" rows="3" required></textarea>
    </div>
    <div class="row">
        <div class="col-lg-6 col-md-12">
            <div class="form-group mybtn" id="Job-Nature">
            <label>Programing Language Require</label>
                <div class="row">
                    <select class="form-control" name="sellist1" id="programLanguage"></select>
                </div>
            </div></br>
            <div class="form-group mybtn" id="Job-Nature">
            <label>Qualification Require</label>
                <div class="row">
                    <select class="form-control" name="sellist1" id="qualification"></select>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-6">
            <div class="form-group">
                <label for="company">Salary</label>
                <input type="text" class="form-control" id="salary" placeholder="salary" required onkeypress="return isNumberKey(event)"/>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label>Agree with term and conditions</label>
        <div class="form-check">
            <input type="checkbox" class="form-check-input " id="exampleCheck1" required />
            <label class="form-check-label text-left" for="exampleCheck1">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida, mollis suspendisse pretium dictumst inceptos mattis euismod lorem nulla magna duis nostra sodales luctus nulla</label>
        </div>
    </div>
    <button onclick="save()" class="btn Post-Job-Offer">Post Job Offer</button></form>`
    document.getElementById("createForm").innerHTML = context;
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/enterprise/findAll",
        success(data) {
            console.log(data)
            let firstTest = ``
            for (let i = 0; i < data.length; i++) {
                firstTest += `<option value="${data[i].id}">${data[i].name}</option>`
            }
            firstTest += ``
            document.getElementById("enterprise").innerHTML = firstTest;
        }
    })
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/city",
        success(data) {
            let text = ``
            for (let i = 0; i < data.length; i++) {

                text += `<option value="${data[i].id}">${data[i].name}</option>`
            }
            text+=``
            document.getElementById("city").innerHTML = text
        }
    })
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/language",
        success(data) {
            let text = ``
            for (let i = 0; i < data.length; i++) {
                text += `<option value="${data[i].id}">${data[i].name}</option>`
            }
            text += ``
            document.getElementById("programLanguage").innerHTML = text;
        }
    })
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/qualification",
        success(data) {
            let newText = ``
            for (let i = 0; i < data.length; i++) {
                newText += `<option value="${data[i].id}">${data[i].name}</option>`
            }
            newText += ``
            document.getElementById("qualification").innerHTML = newText;
        }
    })
}

function inputLanguage() {
    let context = document.getElementById("inputLanguage").innerHTML
    context += `<div id="inputLanguage">
            <div class="row">
                    <select class="form-control" name="sellist1" id="programLanguage"></select>
                </div>
            </div>`
    document.getElementById("inputLanguage").innerHTML = context;
    event.preventDefault()
}

function save() {
    let content = $('#content').val()
    let enterprise = document.getElementById("enterprise").value
    let city = document.getElementById("city").value
    let src = $('#src').val()
    let shortDescription = $('#shortDescription').val()
    let longDescription = $('#longDescription').val()
    let programLanguage = document.getElementById("programLanguage").value
    let qualification = document.getElementById("qualification").value
    let salary = $('#salary').val()

    let newJob = {
        content: content,
        enterprise: {
            "id": enterprise
        },
        city: {
            "id": city
        },
        src: src,
        shortDescription: shortDescription,
        longDescription: longDescription,
        programLanguage: {
            "id": programLanguage
        },
        qualification: {
            "id": qualification
        },
        salary: salary
    };
    console.log(newJob)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newJob),
        url: "http://localhost:8080/job",
        success() {
            window.location.href = "http://localhost:63343/Big%20Project/enterprise/html/list_enterprise_job.html?_ijt=4dit7qimpmnk7n5s7i71roqsmf&_ij_reload=RELOAD_ON_SAVE"
            alert("Posted successfully, now you need to wait for admin to approve the post")
        }
    })
    event.preventDefault()
}

createForm();