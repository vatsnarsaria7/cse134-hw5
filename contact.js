
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const formErrors = [];

    form.addEventListener("submit", function (event) {
        formErrors.length = 0;
        let isValid = true;

        document.querySelectorAll("input, textarea").forEach(function (input) {
            if (!validateField(input)) {
                isValid = false;
            }
        })

        document.getElementById("form-errors").value = JSON.stringify(formErrors);
        console.log("Hidden field form-errors before submission:", document.getElementById("form-errors").value);


        if (!isValid) {
            event.preventDefault();
            console.log("Form Errors:", JSON.stringify(formErrors, null, 2));
        }
    })



    document.getElementById("message").addEventListener("input", function () {
        updateCharacterCount(this);
    })
});


function validateField(input) {
    const errorMessage = input.nextElementSibling; //Read about this at https://www.w3schools.com/jsref/prop_element_nextelementsibling.asp
    errorMessage.textContent = "";
    input.setCustomValidity("");

    if (!input.checkValidity()) {
        if (input.validity.valueMissing) {
            input.setCustomValidity("Required field");
        } else if (input.validity.typeMismatch) {
            input.setCustomValidity("Invalid format");
        } else if (input.validity.patternMismatch) {
            input.setCustomValidity("Only letters and spaces allowed");
        } else if (input.validity.tooShort || input.validity.tooLong) {
            input.setCustomValidity(`Must be between ${input.minLength} and ${input.maxLength} characters.`);
        }

        errorMessage.textContent = input.validationMessage; //To Display custom vlaidaiton message in the output element
        input.classList.add("invalid"); //Add the class 'invalid' to input element for styling
        logError(input.name, input.validationMessage); //Log error message using helper function created below
    } else {
        input.classList.remove("invalid"); //Remove the invalid class for styling
        return true; //show that field is invalid
    }
}


function logError(fieldName, message) {
    formErrors.push({
        field: fieldName,
        message: message
    }); //Add error object to the formErrors array
}


function updateCharacterCount(textarea) {
    const charCount = document.getElementById("char-count");
    const remaining = textarea.maxLength - textarea.value.length;

    charCount.textContent = remaining + " characters remaining";
    if (remaining < 50) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "black";
    }
}


document.getElementById("name").addEventListener("keydown", function (event) {
    if (!/^[A-Za-z\s]$/.test(event.key) && event.key !== "Backspace" && event.key !== "Shift" && event.key !== "Tab" && event.key !== "CapsLock") {
        event.preventDefault();
        showTemporaryError(this, "Only letters and space allowed");
    }
});


function showTemporaryError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
    input.classList.add("flash-error");

    setTimeout(function () {
        error.textContent = "";
        input.classList.remove("flash-error");
    }, 1000);
}