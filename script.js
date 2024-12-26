// Function to store personal details and navigate to professional details page
function storePersonalDetails() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('Gender').value;
    const age = document.getElementById('age').value;

    // Form validation
    let isValid = true;

    // Name validation
    if (!name || /\d/.test(name)) {
        document.getElementById('name-error').innerText = 'Please enter a valid name without numbers.';
        isValid = false;
    } else {
        document.getElementById('name-error').innerText = '';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('email-error').innerText = 'Please enter a valid email address.';
        isValid = false;
    } else {
        document.getElementById('email-error').innerText = '';
    }

    // Phone validation
    const phonePattern = /^\d{10}$/;
    if (!phone || !phonePattern.test(phone)) {
        document.getElementById('phone-error').innerText = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    } else {
        document.getElementById('phone-error').innerText = '';
    }

    // Gender validation
    if (!gender) {
        document.getElementById('gender-error').innerText = 'Please select a gender.';
        isValid = false;
    } else {
        document.getElementById('gender-error').innerText = '';
    }

    // Age validation
    if (!age || isNaN(age) || age <= 0) {
        document.getElementById('age-error').innerText = 'Please enter a valid age.';
        isValid = false;
    } else {
        document.getElementById('age-error').innerText = '';
    }

    if (!isValid) {
        return;
    }

    const personalData = {
        name,
        email,
        phone,
        gender,
        age
    };

    localStorage.setItem('personalData', JSON.stringify(personalData));
    window.location.href = 'professional_detail.html';
}

// Function to store professional details and navigate to submit page
function storeProfessionalDetails() {
    const education = document.getElementById('Education').value;
    const experience = document.getElementById('Experience').value;
    const currentRole = document.getElementById('Current Role').value;

    const skills = [];
    if (document.getElementById('Checkbox1').checked) skills.push('Python Developer');
    if (document.getElementById('Checkbox2').checked) skills.push('React Developer');
    if (document.getElementById('Checkbox3').checked) skills.push('MERN Stack Developer');
    if (document.getElementById('Checkbox4').checked) skills.push('Problem Solving');

    // Form validation
    let isValid = true;

    if (!education) {
        document.getElementById('education-error').innerText = 'Please select your education.';
        isValid = false;
    } else {
        document.getElementById('education-error').innerText = '';
    }

    if (!experience) {
        document.getElementById('experience-error').innerText = 'Please enter your experience.';
        isValid = false;
    } else {
        document.getElementById('experience-error').innerText = '';
    }

    if (!currentRole) {
        document.getElementById('currentRole-error').innerText = 'Please enter your current role.';
        isValid = false;
    } else {
        document.getElementById('currentRole-error').innerText = '';
    }

    if (skills.length === 0) {
        document.getElementById('skills-error').innerText = 'Please select at least one skill.';
        isValid = false;
    } else {
        document.getElementById('skills-error').innerText = '';
    }

    if (!isValid) {
        return;
    }

    const professionalData = {
        education,
        experience,
        currentRole,
        skills
    };

    localStorage.setItem('professionalData', JSON.stringify(professionalData));
    window.location.href = 'submit.html';
}

// Function to retrieve and display data on the submit page
function displayData() {
    const personalData = JSON.parse(localStorage.getItem('personalData'));
    const professionalData = JSON.parse(localStorage.getItem('professionalData'));

    console.log('Personal Data:', personalData);
    console.log('Professional Data:', professionalData);
}

// Function to navigate back to the previous page
function goBack() {
    window.history.back();
}

// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('next-button');
    if (nextButton) {
        nextButton.addEventListener('click', storePersonalDetails);
    }

    const nextButton2 = document.getElementById('next-button2');
    if (nextButton2) {
        nextButton2.addEventListener('click', storeProfessionalDetails);
    }

    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
        submitButton.addEventListener('click', displayData);
    }

    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', goBack);
    }
});