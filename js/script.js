// Welcome - ICT251 Mercy Mwitwa
document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to Mercy Mwitwa's Personal Website - ICT251");
});

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputs = document.querySelectorAll('input');
        const textarea = document.querySelector('textarea');
        const name = inputs[0]? inputs[0].value.trim() : "";
        const email = inputs[1]? inputs[1].value.trim() : "";
        const topic = inputs[2]? inputs[2].value.trim() : "";
        const message = textarea? textarea.value.trim() : "";

        if (name === "" || email === "" || message === "") {
            alert("Error: Please fill all fields. Spaces-only is not allowed!");
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Error: Invalid email address!");
            return;
        }
        alert("SUCCESS!\nName: " + name + "\nEmail: " + email + "\nTopic: " + topic + "\nMessage: " + message + "\n\nLocal preview - form is valid!");
        form.reset();
    });
}