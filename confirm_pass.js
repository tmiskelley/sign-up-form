const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submitButton = document.getElementById("create-account");
const errorMessage = document.createElement("p");

password.addEventListener("blur", checkPasswords);
confirmPassword.addEventListener("blur", checkPasswords);
submitButton.addEventListener("click", checkPasswords);

function checkPasswords() {
    if (password.value != confirmPassword.value) {
        password.setCustomValidity("Passwords do not match");
        confirmPassword.setCustomValidity("Passwords do not match");

        errorMessage.textContent = "* Passwords do not match";
        errorMessage.classList.add("error-message");
        password.parentElement.appendChild(errorMessage);
    } else {
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
        errorMessage.remove();
    }
}
