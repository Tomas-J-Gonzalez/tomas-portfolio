window.addEventListener("DOMContentLoaded", function () {
    checkPassword();
});

function checkPassword() {
    let password = prompt("Enter the password:");

    if (password === null) {
        alert("Access denied.");
        window.location.href = "about:blank"; // Redirect if canceled
        return;
    }

    if (password !== "pass") {
        alert("Incorrect password!");
        window.location.href = "about:blank";
    } else {
        document.body.style.opacity = "1"; // Reveal the page
        document.body.style.pointerEvents = "auto"; // Enable interaction
    }
}
