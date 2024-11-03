function checkPasswords() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var message = document.getElementById('message');

    if (password === confirmPassword) {
        message.textContent = "Passwords match!";
        message.className = "valid";
        return true; // Return true to indicate a match
    } else {
        message.textContent = "Passwords do not match!";
        message.className = "invalid";
        return false; // Return false to indicate no match
    }
}

function validateForm() {
    var passwordMatch = checkPasswords(); // Call checkPasswords to validate

    if (!passwordMatch) {
        alert("Passwords do not match!"); // Alert if passwords do not match
        return false; // Prevent form submission
    }

    // Store user data in localStorage (for demonstration purposes)
    var username = document.querySelector('input[name="uname"]').value;
    localStorage.setItem('username', username);
    
    // Redirect to Login page after successful registration
    window.location.href = 'Login.html';
    
    return true; // Allow form submission if passwords match
}