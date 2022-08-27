// get values from document elements
let adviceNumber = document.getElementById("advice-number");
let adviceText = document.getElementById("advice-text");
const dice = document.getElementById("diceBtn");

// click the button to add event
dice.addEventListener('click', function() {
    showQuote();
});

// get data from API with error catching
function showQuote() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceNumber.textContent = data.id;
        adviceText.textContent = data.advice;
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });
};

// window load the document
window.addEventListener("load", showQuote); 