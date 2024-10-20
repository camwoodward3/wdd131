function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    let errors = [];

    if (name === "") {
        errors.push("Name is required.");
    }

    if (!email.includes("@")) {
        errors.push("Please enter a valid email.");
    }

    if (isNaN(age) || age <= 0) {
        errors.push("Please enter a valid age.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Form submitted successfully!");
    }
}

document.getElementById('myForm').addEventListener('submit', validateForm);