$(document).ready(function() {
    init();
});

function init() {
    document.getElementsByClassName("login")[0].onclick = function() {
        var mail = document.getElementById("mail-id").value;
        var password = document.getElementById("password-id").value;

        var message = "Mail:" + mail + "\nPassword:" + password;
        alert(message);
    };
}
