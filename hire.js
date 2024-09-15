document.addEventListener('DOMContentLoaded', function () {
    const profilesContainer = document.getElementById('profilesContainer');
    const profiles = [];
    localStorage.clear();
    alert('All data cleared!');

    // Iterate over all stored profiles
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('profile_')) {
            const profile = JSON.parse(localStorage.getItem(key));
            profiles.push(profile);
        }
    }

    // Display profiles
    profiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile-card'); // You can style this with CSS
        profileDiv.innerHTML = `
            <div class="profile-image-container">
                <img src="${profile.image || 'default-profile.png'}" alt="${profile.name}" class="profile-image" />
            </div>
            <div class="profile-details">
                <p><strong>Name:</strong> ${profile.name || 'N/A'}</p>
                <p><strong>Bio:</strong> ${profile.bio || 'N/A'}</p>
                <p><strong>Country:</strong> ${profile.country || 'N/A'}</p>
                <p><strong>State:</strong> ${profile.state || 'N/A'}</p>
                <p><strong>Profession:</strong> ${profile.profession || 'N/A'}</p>
                <p><strong>Daily Charges:</strong> ${profile.charges || 'N/A'}</p>
                <button class="hireBtn" data-name="${profile.name}" data-email="${profile.email}" data-phone="${profile.phone}" data-role="${profile.profession}" data-charges="${profile.charges}">Hire</button>
            </div>
        `;
        profilesContainer.appendChild(profileDiv);
    });

    // Handle hire button clicks
    profilesContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('hireBtn')) {
            const name = e.target.getAttribute('data-name');
            const email = e.target.getAttribute('data-email');
            const phone = e.target.getAttribute('data-phone');
            const role = e.target.getAttribute('data-role');
            const charges = e.target.getAttribute('data-charges');

            // Store laborer's details in local storage
            localStorage.setItem('currentHire', JSON.stringify({ name, email, phone, role, charges }));

            // Redirect to hireForm.html
            window.location.href = 'hireForm.html';
        }
    });
});
