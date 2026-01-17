const form = document.getElementById("form");
const id_input = document.getElementById("id-input");
const password_input = document.getElementById("password-input");
const error_message = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
e.preventDefault(); // stop default submit first
const id = id_input.value.trim();
const pass = password_input.value.trim();

let errors = [];

if (id === "") {
errors.push("User ID is required");
id_input.parentElement.classList.add("incorrect");
}

if (pass === "") {
errors.push("Password is required");
password_input.parentElement.classList.add("incorrect");
}

// check fixed login credentials
if (id && pass && !(id === "yash" && pass === "9170")) {
errors.push("Invalid ID or Password");
id_input.parentElement.classList.add("incorrect");
password_input.parentElement.classList.add("incorrect");
}

if (errors.length > 0) {
error_message.innerText = errors.join(". ");
} else {
// Login success → go to home page
window.location.href = "C:\Users\yash2\Documents\GitHub\Radhey-Shyam-Shakuntala-Seth-Shikshan-Sansthaan\Sidebar\main.html";
}
});

// remove errors as user types
[id_input, password_input].forEach(input => {
input.addEventListener("input", () => {
input.parentElement.classList.remove("incorrect");
error_message.innerText = "";
});
});