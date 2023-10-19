document.addEventListener('DOMContentLoaded', function () {
    // You can add your JavaScript code here

    // Example: Display an alert when the user clicks a button
    const alertButton = document.getElementById('alertButton');

    if (alertButton) {
        alertButton.addEventListener('click', function () {
            alert('Hello! This is an example alert.');
        });
    }
});
N