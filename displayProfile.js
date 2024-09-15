document.addEventListener('DOMContentLoaded', function () {
    const profileDisplay = document.getElementById('profileDisplay');
    const editProfileBtn = document.getElementById('editProfileBtn');

    // Get the profile from localStorage
    const profile = JSON.parse(localStorage.getItem('profile'));

    if (profile) {
        document.getElementById('displayName').textContent = profile.name;
        document.getElementById('displayEmail').textContent = profile.email;
        document.getElementById('displayPhone').textContent = profile.phone;
        document.getElementById('displayBio').textContent = profile.bio;
        document.getElementById('displayCountry').textContent = profile.country;
        document.getElementById('displayState').textContent = profile.state;
        document.getElementById('displayProfession').textContent = profile.profession;
        document.getElementById('displayCharges').textContent = profile.charges;
        document.getElementById('displayImage').src = profile.image;

        // Show the profile section
        profileDisplay.style.display = 'block';
    }

    // Edit Profile button redirects to the create profile page
    editProfileBtn.addEventListener('click', function () {
        window.location.href = 'Profile.html';
    });
});
