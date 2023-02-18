var rateButtons = [];
var currentRate = 0;

function init() {

    rateButtons = document.querySelectorAll(".ratings button");
}

function updateRating(newRating) {

    rateButtons.forEach((btn, i) => {
        if (i == newRating - 1) {
            btn.className = "current-rate";
            currentRate = newRating;
        }
        else {
            btn.className = "";
        }
    });
}

function changeCard() {

    if (currentRate == 0) return;

    var firstCard = document.querySelector(".card");
    firstCard.style.transform = 'translate(-50%, -50%) scale(1.5, 1.5)';
    firstCard.style.opacity = 0;

    setTimeout(() => {
        firstCard.style.display = 'none';
    }, 200)

    var secondCard = document.querySelector(".thanks");
    secondCard.style.display = 'flex';

    var selectionText = document.querySelector('.selected');
    selectionText.innerHTML = `You selected ${currentRate} out of 5`
}

window.addEventListener('load', init);