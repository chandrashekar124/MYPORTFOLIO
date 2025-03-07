document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Form Submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // TODO: Implement email sending or saving logic here.

    alert("Thank you for your message, " + name + "!");
    document.getElementById("contact-form").reset(); // Reset form fields
});
