'use strict';


const responses = [
    "The Emperor protects.",
    "It is the will of the Omnissiah.",
    "Your query is heresy.",
    "Recalibrate your expectations.",
    "The Warp is unclear.",
    "Machine Spirit says... yes.",
    "The Cogitator stutters... try again.",
    "Only in death does duty end.",
    "Praise be to Mars—affirmative.",
    "The data is corrupted. Try again."
];

document.addEventListener("DOMContentLoaded", function () {
    const shakeButton = document.getElementById("shakeButton");
    const questionInput = document.getElementById("question");
    const answerDisplay = document.getElementById("answer");

    shakeButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page reload

        const question = questionInput.value.trim();

        if (question === "") {
            answerDisplay.textContent = "You must offer a query to the Machine Spirit.";
        } else {
            const randomIndex = Math.floor(Math.random() * responses.length);
            const response = responses[randomIndex];
            answerDisplay.textContent = response;
        }
    });
});

shakeButton.addEventListener("click", function () {
    const message = document.getElementById("message");
    const music = document.getElementById("music")

    // message.style.display = ("block");
    if (message.style.display === "none") {
        message.style.display = ("block");
        setTimeout(() => {
            message.style.display = "none";
        }, 2000);
    } else {
        message.style.display = ("block");
    }
    music.play();
});
