document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form inputs
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Print values to the console
    console.log("Email: " + email);
    console.log("Password: " + password);

    // You can also perform further actions or validation here
});