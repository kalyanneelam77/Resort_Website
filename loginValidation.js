function loginValidation() {
    var uname = document.myform.username.value;
    var pass = document.myform.password.value;
    var message = document.getElementById('message'); // Element to display messages

    // Clear previous messages
    message.textContent = "";
    message.className = ""; // Reset class

    if (uname == null || uname === "") {
        message.textContent = "Name can't be blank";
        message.className = "invalid"; // You can style this class in CSS
        return false;
    } else if (pass.length < 6) {
        message.textContent = "Password must be at least 6 characters long";
        message.className = "invalid"; // You can style this class in CSS
        return false;
    }

    // If validation passes
    message.textContent = "Login successful!"; // Optional success message
    message.className = "valid"; // You can style this class in CSS
    return true; // Allow form submission
}