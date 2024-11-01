
const users = [
    { username: "mayank", password: "mayank123" },
    { username: "ram", password: "ram123" },
    { username: "karan", password: "karan123" },
    { username: "naman", password: "naman123" },
    { username: "khushi", password: "khushi123" },
    { username: "priya", password: "priya123" },
    { username: "harsh", password: "harsh123" },
    { username: "motu", password: "motu123" },
];

// Function to validate the form with hardcoded users
function validateForm() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginContainer = document.querySelector(".login-container");
    const loginBox = document.querySelector(".login-box");

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Find if the entered username and password match any user in the hardcoded list
    const validUser = users.find(user => user.username === username && user.password === password);

    if (!validUser) {
        // Show error animation if credentials don't match
        loginBox.classList.add("error");
        setTimeout(() => loginBox.classList.remove("error"), 300);
        alert("Invalid username or password!");

        // Clear the input fields
        usernameInput.value = "";
        passwordInput.value = "";
        return false;
    }

    // If login is successful, show the takeoff animation
    loginBox.classList.add("takeoff");

    // Simulate a delay before showing a success message to let the takeoff animation play
    setTimeout(() => {
        alert("Login successful! Welcome, " + username);

        // Clear the input fields after successful login
        usernameInput.value = "";
        passwordInput.value = "";
    }, 1000); // Wait for 1 second (length of the takeoff animation)
    
    return true;
}

// Add event listener to the form submit button
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    validateForm(); // Call the custom validation function
});
