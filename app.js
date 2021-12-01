// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const chatchphrasesEl = document.getElementById('chatchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

// set state for all of the character's catchphrases
let catchphraseArray = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    let headValue = headDropdown.value; 

    // increment the head change count state
    headCount++;

    // update the dom for the head
    headEl.textContent = '';

    let headImg = document.createElement('img');
    headImg.src = `./assets/${headValue}-head.png`;
    headEl.append(headImg);

    // update the stats to show the new count
    displayStats(headCount);

});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    let middleValue = middleDropdown.value;

    // increment the middle change count state
    middleCount++;

    // update the dom for the middle
    middleEl.textContent = '';

    let middleImg = document.createElement('img');
    middleImg.src = `./assets/${middleValue}-middle.png`;
    middleEl.append(middleImg);

    // update the stats to show the new count
    displayStats(middleCount);

});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
   let bottomValue = bottomDropdown.value;

    // increment the bottom change count state
    bottomCount++;

    // update the dom for the bottom
    bottomEl.textContent = '';

    let bottomImg = document.createElement('img');
    bottomImg.src = `./assets/${bottomValue}-pants.png`;
    bottomEl.append(bottomImg);

    // update the stats to show the new count
    displayStats(bottomCount);

});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    
    // push the new catchphrase to the catchphrase array in state
    // update the dom for the bottom
    // clear out the form input's value so it's empty to the user
    // update the dom to show the new catchphrases (call a function to do this work)

});

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(); // call this function with the correct arguments
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases

    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
}
