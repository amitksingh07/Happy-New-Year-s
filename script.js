document.getElementById("sendMessageBtn").addEventListener("click", function() {
    // Show the message box after button click
    document.getElementById("messageBox").style.display = "block";

    // Display a custom alert message
    alert("Happy New Year 2025! 🥳 May this year bring you happiness and success!");

    // Optionally hide the message box after 5 seconds
    setTimeout(function() {
        document.getElementById("messageBox").style.display = "none";
    }, 5000);
});
