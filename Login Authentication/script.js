
document.addEventListener("DOMContentLoaded", () => {
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const submitBtn = document.getElementById("submit-btn");
    const toggleForm = document.getElementById("toggle-form");
    const forgotPasswordLink = document.getElementById("forgot-password");

    let isLogin = true;

    // Toggle Login/Signup
    toggleForm.addEventListener("click", (e) => {
        e.preventDefault();
        isLogin = !isLogin;

        if (isLogin) {
            formTitle.textContent = "Login";
            submitBtn.textContent = "Login";
            toggleForm.innerHTML = `Want to create a new account? <a href="#">Sign Up</a>`;

            confirmPasswordInput.style.display = "block";
        } else {
            formTitle.textContent = "Sign Up";
            submitBtn.textContent = "Sign Up";
            toggleForm.innerHTML = `Already have an account? <a href="#">Login</a>`;
            confirmPasswordInput.style.display = "block";
        }
    });

    // Handle Authentication
    authForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        let users = JSON.parse(localStorage.getItem("users")) || {};

        if (isLogin) {
            if (users[email] && users[email] === password) {
                alert("Login Successful!");
                localStorage.setItem("loggedInUser", email);
                window.location.href = "secured.html"; // Redirect to secured page
            } else {
                alert("Invalid Email or Password!");
            }
        } else {
            if (users[email]) {
                alert("Email already exists. Try logging in.");
            } else if (password !== confirmPassword) {
                alert("Passwords do not match!");
            } else {
                users[email] = password;
                localStorage.setItem("users", JSON.stringify(users));
                alert("Signup Successful! Please login.");
                isLogin = true;
                toggleForm.click(); // Switch to login form
            }
        }
    });

    // Forgot Password
    forgotPasswordLink.addEventListener("click", (e) => {
        e.preventDefault();
        const email = prompt("Enter your registered email:");
        let users = JSON.parse(localStorage.getItem("users")) || {};

        if (users[email]) {
            const newPassword = prompt("Enter new password:");
            users[email] = newPassword;
            localStorage.setItem("users", JSON.stringify(users));
            alert("Password reset successful! Please login.");
        } else {
            alert("Email not found!");
        }
    });
});
