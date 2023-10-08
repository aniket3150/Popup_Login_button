document.addEventListener("DOMContentLoaded", function () {
    const openLoginBtn = document.getElementById("open-login-btn");
    const closeLoginBtn = document.getElementById("close-login-btn");
    const loginPopup = document.getElementById("login-popup");

    openLoginBtn.addEventListener("click", function () {
        loginPopup.style.display = "block";
    });

    closeLoginBtn.addEventListener("click", function () {
        loginPopup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === loginPopup) {
            loginPopup.style.display = "none";
        }
    });

    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        // You can add login logic here
        console.log("Username: " + username);
        console.log("Password: " + password);
        // Close the popup after login
        loginPopup.style.display = "none";
    });
});
