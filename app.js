/* Imports */

/* Get DOM Elements */
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

/* State */
let wins = 0;
let total = 0;
/* Events */
button1.addEventListener('click', () => {
    total++;
    resetPearls();
    const pearlLocation = Math.ceil(Math.random() * 3);

    if (pearlLocation === 1) {
        wins++;
        shell1.classList.add('reveal');
    } else if (pearlLocation === 2) {
        shell2.classList.add('reveal');
    } else {
        shell3.classList.add('reveal');
    }
    displayResults();
});

button2.addEventListener('click', () => {
    total++;
    resetPearls();
    const pearlLocation = Math.ceil(Math.random() * 3);

    if (pearlLocation === 1) {
        shell1.classList.add('reveal');
    } else if (pearlLocation === 2) {
        wins++;
        shell2.classList.add('reveal');
    } else {
        shell3.classList.add('reveal');
    }
    displayResults();
});

button3.addEventListener('click', () => {
    total++;
    resetPearls();
    const pearlLocation = Math.ceil(Math.random() * 3);

    if (pearlLocation === 1) {
        shell1.classList.add('reveal');
    } else if (pearlLocation === 2) {
        shell2.classList.add('reveal');
    } else {
        wins++;
        shell3.classList.add('reveal');
    }
    displayResults();
});

function resetPearls() {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
}

function displayResults() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}
