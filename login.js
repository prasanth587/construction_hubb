document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve user from localStorage
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
        alert('Login successful! Redirecting to home page...');
        window.location.href = 'home.html'; // Redirect to home page
    } else {
        alert('Invalid email or password.');
    }
});
