document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the form inputs
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // You can perform further validation or send the data to a server here
        // For now, let's just log the values to the console
        console.log("Email: " + email);
        console.log("Password: " + password);

        
    });
});