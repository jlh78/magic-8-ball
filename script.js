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
    "The data is corrupted. Try again.",
    "All praise to the Emperor.",
    "All souls cry out for Salvation.",
    "Analysis is the bane of Conviction.",
    "Be Pure.",
    "Be vigilant and strong. The Emperor knows what evil lurks in the vacillation of a fool.",
    "Big guns never tire.",
    "Blessed are the Gun Makers.",
    "Blessed is the mind too small for doubt.",
    "Brave are they who know everything yet fear nothing.",
    "Burn the Heretic.",
    "By the manner of our Death we are judged.",
    "Carry the Emperor's wull as your torch, with it destroy the shadows.",
    "Cease and repent!",
    "Compromise is akin to treachery.",
    "Dark Dream lie upon the Heart.",
    "Doubt is a sign of weakness.",
    "Drink deep of Victory and remember the fallen.",
    "Duty Prevails.",
    "Enlightenment is a myth we do not need to understand in order to hate.",
    "Every lone spirit doubts his strength.",
    "Exist for the Emperor.",
    "Examine your thoughts!",
    "For a warrior the only crime is cowardice.",
    "Glory in Death is Life Eternal."
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
