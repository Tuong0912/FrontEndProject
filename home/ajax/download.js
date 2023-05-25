
$(document).ready(function() {
    $('#downloadButton').click(function() {
        downloadHTML();
    });
});

function downloadHTML() {
    $.ajax({
        url: 'http://localhost:8080/appStore/download-html', // Đường dẫn đến endpoint để tải trang HTML
        type: 'GET',
        dataType: 'html',
        success: function(response) {
            $('#downloadedHTML').html(response); // Hiển thị nội dung HTML đã tải về
            alert("Download successfully")
        },
        error: function(xhr, status, error) {
            console.log('Lỗi khi tải trang HTML: ' + error);
        }
    });
}