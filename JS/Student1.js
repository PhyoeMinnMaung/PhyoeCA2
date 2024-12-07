// Student 1 Phyoe Minn Maung

// Email validation
function validateEmail() {
	var email = document.getElementById("email").value;
	var valid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (!valid.test(email)) {
		alert("Please enter a valid email address.");
		return false;
	}
	return true;
}

// Drop down for Day
const dayDropdown = document.getElementById("day");
for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    dayDropdown.appendChild(option);
}

// Drop down for Year
const yearDropdown = document.getElementById("year");
const years = [2024, 2025, 2026];
years.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearDropdown.appendChild(option);
});