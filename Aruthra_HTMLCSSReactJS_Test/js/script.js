const form = document.querySelector('.form');
const formBtn = form.querySelector('#form-btn');

formBtn.addEventListener('click', function(event) {
    event.preventDefault();
    handleSubmit();
});

function handleSubmit() {
    const fields = {
        firstName: form.querySelector('input[name="first-name"]').value.trim(),
        lastName: form.querySelector('input[name="last-name"]').value.trim(),
        email: form.querySelector('input[name="email"]').value.trim(),
        phone: form.querySelector('input[name="phone"]').value.trim(),
        password: form.querySelector('input[name="password"]').value.trim()
    };
    
    const error = form.querySelector('#error');
    error.textContent = ""; 
    error.style.color = 'red';

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    // Check for empty fields
    for (const key in fields) {
        if (!fields[key]) {
            error.textContent = `${capitalizeFirstLetter(key.replace('-', ' '))} is required.`;
            return;
        }
    }

    // Individual field validation
    if (!nameRegex.test(fields.firstName) || !nameRegex.test(fields.lastName)) {
        error.textContent = "Names must contain only letters.";
        return;
    }

    if (!emailRegex.test(fields.email)) {
        error.textContent = "Please enter a valid email address.";
        return;
    }

    if (!phoneRegex.test(fields.phone)) {
        error.textContent = "Phone number must be exactly 10 digits.";
        return;
    }

    if (fields.password.length < 6) {
        error.textContent = "Password must be at least 6 characters long.";
        return;
    }

    // Log results
    Object.keys(fields).forEach(field => {
        console.log(`${capitalizeFirstLetter(field)}: ${fields[field]}`);
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
