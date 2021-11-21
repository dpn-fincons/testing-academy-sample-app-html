// Get the modal
const modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function checkUser() {
    const url = new URL(window.location);
    const name = url.searchParams.get("name");
    if (name) {
        document.getElementById("logged-user").innerHTML = 'Signed in as ' + name;
        document.getElementById('login-button').style.display = 'none';
        document.getElementById('sign-up-button').style.display = 'none';
        document.getElementById('logout-button').style.display = '';
    }
}

function loginAction() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === 'cucumber' && password === 'demo') {
        window.location.href = './index.html?name=Tester';
    } else {
        document.getElementById("login-error-message").innerHTML = 'Wrong username and/or password';
    }
}

function logoutAction() {
    document.getElementById('login-button').style.display = '';
    document.getElementById('sign-up-button').style.display = '';
    document.getElementById('logout-button').style.display = 'none';
    document.getElementById("logged-user").innerHTML = '';
}
