// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');
console.log(catchphrasesEl);

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

// set state for all of the character's catchphrases
let catchphraseArray = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const headValue = headDropdown.value; 

    // increment the head change count state
    headCount++;

    // update the dom for the head
    headEl.textContent = '';

    const headImg = document.createElement('img');
    headImg.src = `./assets/${headValue}-head.png`;
    headEl.append(headImg);

    // update the stats to show the new count
    displayStats();

});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    const middleValue = middleDropdown.value;

    // increment the middle change count state
    middleCount++;

    // update the dom for the middle
    middleEl.textContent = '';

    const middleImg = document.createElement('img');
    middleImg.src = `./assets/${middleValue}-middle.png`;
    middleEl.append(middleImg);

    // update the stats to show the new count
    displayStats();

});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    const bottomValue = bottomDropdown.value;

    // increment the bottom change count state
    bottomCount++;

    // update the dom for the bottom
    bottomEl.textContent = '';

    const bottomImg = document.createElement('img');
    bottomImg.src = `./assets/${bottomValue}-pants.png`;
    bottomEl.append(bottomImg);

    // update the stats to show the new count
    displayStats();

});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const newCatchphrase = catchphraseInput.value;

    // push the new catchphrase to the catchphrase array in state
    catchphraseArray.push(newCatchphrase);

    // update the dom for the 
    // catchphrasesEl.append(catchphraseArray);

    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';

    // update the dom to show the new catchphrases (call a function to do this work)
    displayCatchphrases();

});

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state

    reportEl.textContent = `You clicked the head ${headCount} times, the middle ${middleCount} times, and the bottom ${bottomCount} times.`;

    const statsString = makeStatsString(); // call this function with the correct arguments
}

function displayCatchphrases() {
    catchphrasesEl.textContent = '';

    for (let phrase of catchphraseArray) {

        const p = document.createElement('p');

        p.textContent = phrase;

        catchphrasesEl.append(p);
    }
}