
function submitAction() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var passwordRpt = document.getElementById("psw-repeat").value;
    document.getElementById("error-message").innerHTML = '';
    document.getElementById("confirm-message").innerHTML = '';
    if (username == "cucumber") {
        document.getElementById("error-message").innerHTML = 'Username ' + username + ' already in use';
    } else {
        if (password == passwordRpt) {
            document.getElementById("confirm-message").innerHTML = name + ', you are signed up!';
            window.location.href = './index.html?name=' + name;
        } else {
            document.getElementById("error-message").innerHTML = 'Password and repeat password do not match';
        }
    }
}

function cancelAction() {
    document.getElementById("name").value = '';
    document.getElementById("username").value = '';
    document.getElementById("password").value = '';
    document.getElementById("psw-repeat").value = '';
    document.getElementById("error-message").innerHTML = '';
    document.getElementById("confirm-message").innerHTML = '';
}
