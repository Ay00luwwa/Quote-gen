// Data and constants
const quotes = [
    // ... your static quotes
];

const quoteElement = document.getElementById("quote");
const darkModeSwitch = document.getElementById("darkModeSwitch");
const body = document.body;

// Functions for UI Interactions

function fadeOutElement(element, callback) {
    element.style.opacity = '0';
    setTimeout(callback, 300); // Wait for fade out
}

function fadeInElement(element) {
    element.style.opacity = '1';
}
// Functions related to notifications

if ("Notification" in window) {
    Notification.requestPermission().then(function(result) {
        console.log(result); // "granted", "denied", or "default"
    });
} else {
    console.log("This browser does not support desktop notifications.");
}

function displayNotification(title, body) {
    if (Notification.permission === "granted") {
        const notification = new Notification(title, {
            body: body,
        });
    }
}

// Functions related to quote generation and display

function setQuoteContent(content, author) {
    fadeOutElement(quoteElement, () => {
        quoteElement.textContent = `${content} - ${author}`;
        fadeInElement(quoteElement);
    });
}

function fetchRandomQuoteFromAPI() {
    fetch('https://api.quotable.io/random')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            setQuoteContent(data.content, data.author);
            displayNotification("New Quote!", `${data.content} - ${data.author}`);
        })
        .catch(error => {
            console.log("There was a problem with the fetch operation:", error.message);
        });
}

// Event listeners

if (quoteElement) {
    document.getElementById("generate").addEventListener("click", fetchRandomQuoteFromAPI);
}

// Initial actions
fetchRandomQuoteFromAPI();
