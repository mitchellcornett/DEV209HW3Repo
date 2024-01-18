document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("newUserFieldset").disabled = true;
    document.getElementById("existingUserFieldSet").disabled = true;
})

function NewUserButtonEvent() {
    document.getElementById("buttonsFieldset").disabled = true;
    document.getElementById("newUserFieldset").disabled = false;
}

function ExistingUserButtonEvent() {
    document.getElementById("buttonsFieldset").disabled = true;
    document.getElementById("existingUserFieldSet").disabled = false;
}

function NewUserLoginButtonEvent() {
    username = document.getElementById("newUserUsername").value;
    password = document.getElementById("newUserPassword").value;
    city = document.getElementById("city").value;
    state = document.getElementById("state").value;

    alert("Welcome " + username);

    localStorage.setItem("usernameKey",username);
    localStorage.setItem("passwordKey",password);
    localStorage.setItem("cityKey",city);
    localStorage.setItem("stateKey",state);
}

function ExistingUserLoginButtonEvent() {
    existingUserUsername = document.getElementById("existingUserUsername").value;
    existingUserPassword = document.getElementById("existingUserPassword").value;

    newUserUsername = localStorage.getItem("usernameKey");
    newUserPassword = localStorage.getItem("passwordKey");

    if (existingUserUsername === newUserUsername && existingUserPassword === newUserPassword) {
        alert("Welcome " + newUserUsername);
    }
    else {
        alert("Invalid Login");
    }
}