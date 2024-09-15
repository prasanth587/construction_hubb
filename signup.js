document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if user already exists in localStorage
    if (localStorage.getItem(email)) {
        alert('User already exists. Please log in.');
    } else {
        // Save user credentials in localStorage
        localStorage.setItem(email, JSON.stringify({ email, password }));
        alert('Signup successful! Redirecting to login page...');
        window.location.href = 'login.html'; // Redirect to login page
    }
});
