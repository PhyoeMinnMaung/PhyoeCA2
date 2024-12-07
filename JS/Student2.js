// Student 2 Aung Zaw Zaw

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Populate Day, Month, and Year dropdowns
    const dayDropdown = document.getElementById("day");
    const monthDropdown = document.getElementById("month");
    const yearDropdown = document.getElementById("year");

    // Populate Day
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        dayDropdown.appendChild(option);
    }

    // Populate Month
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    monthNames.forEach((month, index) => {
        const option = document.createElement("option");
        option.value = index + 1;
        option.textContent = month;
        monthDropdown.appendChild(option);
    });

    // Populate Year
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i <= currentYear + 5; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearDropdown.appendChild(option);
    }

    // Form validation
    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Name validation
        const nameField = document.getElementById("name");
        const nameError = document.getElementById("nameError");
        const namePattern = /^[a-zA-Z\s]+$/; // Allows only letters and spaces
        if (!nameField.value || !namePattern.test(nameField.value)) {
            nameError.style.display = "inline";
            isValid = false;
        } else {
            nameError.style.display = "none";
        }

        // Email validation
        const emailField = document.getElementById("email");
        const emailError = document.getElementById("emailError");
        if (!emailField.value || !emailField.checkValidity()) {
            emailError.style.display = "inline";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // Phone validation
        const phoneField = document.getElementById("phone");
        const phoneError = document.getElementById("phoneError");
        const phonePattern = /^[0-9+\-()\s]+$/; // Adjust pattern as needed
        if (!phoneField.value || !phonePattern.test(phoneField.value)) {
            phoneError.style.display = "inline";
            isValid = false;
        } else {
            phoneError.style.display = "none";
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});