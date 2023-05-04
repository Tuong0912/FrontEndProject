$(document).ready(function() {
    $('.quantity-input').bind("cut copy paste drag drop", function(e) {
        e.preventDefault();
    });
});
function isNumberKey(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}