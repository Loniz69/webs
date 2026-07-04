const button = document.getElementById("magicButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    const now = new Date();

    message.textContent =
        `🎉 JavaScript is working! Current time: ${now.toLocaleTimeString()}`;
});