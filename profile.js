
document.getElementById('profileForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const bio = document.getElementById('bio').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const profession = document.getElementById('profession').value;
    const charges = document.getElementById('charges').value;
    const profileImage = document.getElementById('profileImage').files[0];

    // Convert the image to a base64 string
    const reader = new FileReader();
    reader.onloadend = function () {
        const base64String = reader.result;
        
        // Create the profile object
        const profile = {
            name,
            email,
            phone,
            bio,
            country,
            state,
            profession,
            charges,
            image: base64String // Store the base64 image data
        };

        // Save the profile to localStorage
        const profileId = `profile_${name}`;
        localStorage.setItem(profileId, JSON.stringify(profile));
        
        // Optionally, redirect or clear the form
        alert('Profile created successfully!🤭');
    };
    
    // If a file was selected, read the file as a data URL (base64)
    if (profileImage) {
        reader.readAsDataURL(profileImage);
    } else {
        alert('Please upload a profile image.🤬');
    }
});
