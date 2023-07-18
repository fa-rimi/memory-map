/**
 * Memory Card Game (version 1):
 *
 * Player will first get a practice round:
 * practice = 2x2 -- flip cards before timer runs out
 * screen will display an array of 2 by 2 cards that take up a certain amount of space onscreen
 *
 * * player is prompted to click start
 * * when player clicks the start button; timer will run
 *
 * gamePlay: ( a while loop with nested if else loop possibly? )
 * * player will flip a card and the card will stay front-facing
 * * player will then flip another card and will stay front-facing
 * * the program will checkWin;
 * * if (cards-match === true) {
 * * the cards will stay front-facing;
 * * } else if (card-match === false) {
 * * cards will shake and flip to back-facing after 5 seconds
 * * } else {
 * * }
 *
 * timer: (tbd)
 * * if (timeRunsOut === true) {
 * * gameOver;
 * * } else {
 * * gamePlay continues;
 * * }
 *
 * counter:
 * count how many times memory card was click when back-facing
 *
 * Player will have the option to pick game setting: easy, medium, and hard;toggle
 * based off the game setting they will have a different amount of time to complete it
 * * easy = 6x6 (time tbd)
 * * medium = 8x8 (time tbd)
 * * hard = 10x10 (time tbd)
 *
 *
 */

// *********** timer function ***********
const timer = document.querySelector("#timer");
// add a when user clicks start button the timer is triggered

// *********** card flip function ***********
// selecting all the memory cards
const memoryCards = document.querySelectorAll(".memory-card");
const cardsArray = [...memoryCards];
//! converted the NodeList to an array because when I first added the forEach card event listener I kept getting a typeError saying the function was not a function -> this was because it was reading the memory cards as a nodeList and I cant do the forEach function for a nodeList but I can for an array

// iterate over each memory card and add the click event listener
cardsArray.forEach((card) => {
  card.addEventListener("click", flipCard);
});

// lock board will lock board so multiple cards cant be flipped and I set it to false because at the beginning of the game no cards will flip until game has started
let lockBoard = false;
let firstCard; // going to store the first card thats flipped
let moveCounter = 0; // initializing a move counter

// created a call back function for flipCard to actually flip the cards now
function flipCard() {
  // Check if the board is locked or if the card is already flipped, or if the same card is clicked
  if (lockBoard || this === firstCard || this.classList.contains("flip")) {
    return;
  }

  // Add the flip class to the clicked card so we know that it has already been flipped
  this.classList.add("flip");
  // increment move counter 1 click is 1 move and so on
  moveCounter++;
  updateMoveCounter();

  // *********** check if cards match ***********
  // add something that says:
  // if this function applies
  // when the first card is flipped {
  // start the a time out thing that basically makes sure that you flip another card before the 8 second
  // limit (or it will consider you inactive and flip back)
  // } else {
  // if you clicked another card (the secondary card)
  // it will clear time out
  // and check if the cards match which will run another function that checks the colors
  // }
}

// *********** check if cards match ***********
// game will check if card1 color === card2 color
// if the cards match
// the cards will stay front-face side up
// if it does not, both cards will flip back to its back-face

// *********** disable flip card ***********

// *********** moves counter function ***********
// i need create a function that update the counter with every click

// first I need to create the function that updates the move counter
function updateMoveCounter() {
  // then i need to select the id within the span element in HTML because thats where it will be updating
  const moveCounterElement = document.getElementById("move-counter");
  moveCounterElement.textContent = moveCounter.toString();
  console.log("Move Counter:", moveCounter);
}
