function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Access form elements by their IDs
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Print values to the console
    
    console.log("Email: " + email);
    console.log("password: " + password);
}

// Add an event listener to the form
var form = document.getElementById("myForm");
form.addEventListener("click", handleSubmit);