const form = document.getElementById("registrationForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");


// Load saved username

window.addEventListener("DOMContentLoaded", () => {

    const savedUsername = localStorage.getItem("username");

    if (savedUsername) {
        username.value = savedUsername;
    }

});


function setValid(input, errorElement) {

    input.classList.remove("invalid");
    input.classList.add("valid");

    errorElement.textContent = "";
}


function setInvalid(input, errorElement, message) {

    input.classList.remove("valid");
    input.classList.add("invalid");

    errorElement.textContent = message;
}


function validateUsername() {

    if (username.validity.valueMissing) {

        setInvalid(
            username,
            usernameError,
            "Username is required."
        );

        return false;
    }

    if (username.validity.tooShort) {

        setInvalid(
            username,
            usernameError,
            "Username must be at least 3 characters."
        );

        return false;
    }

    setValid(username, usernameError);

    return true;
}


function validateEmail() {

    if (email.validity.valueMissing) {

        setInvalid(
            email,
            emailError,
            "Email is required."
        );

        return false;
    }

    if (email.validity.typeMismatch) {

        setInvalid(
            email,
            emailError,
            "Enter a valid email."
        );

        return false;
    }

    setValid(email, emailError);

    return true;
}


function validatePassword() {

    if (password.validity.valueMissing) {

        setInvalid(
            password,
            passwordError,
            "Password is required."
        );

        return false;
    }

    if (password.validity.tooShort) {

        setInvalid(
            password,
            passwordError,
            "Password must be at least 8 characters."
        );

        return false;
    }

    if (password.validity.patternMismatch) {

        setInvalid(
            password,
            passwordError,
            "Password must contain uppercase, lowercase, and a number."
        );

        return false;
    }

    setValid(password, passwordError);

    return true;
}


function validateConfirmPassword() {

    if (confirmPassword.validity.valueMissing) {

        setInvalid(
            confirmPassword,
            confirmPasswordError,
            "Please confirm your password."
        );

        return false;
    }

    if (confirmPassword.value !== password.value) {

        setInvalid(
            confirmPassword,
            confirmPasswordError,
            "Passwords do not match."
        );

        return false;
    }

    setValid(confirmPassword, confirmPasswordError);

    return true;
}


// Real-time validation

username.addEventListener("input", validateUsername);

email.addEventListener("input", validateEmail);

password.addEventListener("input", () => {

    validatePassword();

    validateConfirmPassword();

});

confirmPassword.addEventListener("input", validateConfirmPassword);


// Submit

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const usernameValid = validateUsername();

    const emailValid = validateEmail();

    const passwordValid = validatePassword();

    const confirmValid = validateConfirmPassword();

    if (
        usernameValid &&
        emailValid &&
        passwordValid &&
        confirmValid
    ) {

        localStorage.setItem(
            "username",
            username.value
        );

        alert("Registration Successful!");

        form.reset();

        document
            .querySelectorAll(".valid")
            .forEach(input => {

                input.classList.remove("valid");

            });

    } else {

        const firstInvalid = document.querySelector(".invalid");

        if (firstInvalid) {

            firstInvalid.focus();

        }

    }

});